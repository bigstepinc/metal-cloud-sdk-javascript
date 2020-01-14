/**
 * Server code must:
 * - set applySchemaDefaults to true (this affects read-only properties as well).
 * - set destroyInputReadOnlyProperties to true to not accept input from function params into read-only properties from the "object".
 * - provide objDefaultOverride in both _create() and _update() functions.
 * - provide an *empty* objDefaultOverride for function returns.
 * - provide objReadOnlyOverride in both _create() and _update() functions and similar to enforce read-only-ness of specific properties.
 * - provide an *empty* objReadOnlyOverride for function returns.
 *
 *
 * objReadOnlyOverride can have all properties, and only those marked as read-only in the schema will be utilized.
 * objReadOnlyOverride has priority over destroyInputReadOnlyProperties on a per property name.
 * objDefaultOverride can have all properties, and all provided properties will be used for default values.
 *
 *
 * All client code (API clients) should only provide the "object" param and leave the rest at their defaults for all intents and purposes.
 * When returning instances of subclasses of ObjectBase on the server side, only provide the "object" param and leave the rest at their defaults.
 *
 * Generally, only server side code should call the .validate() method for both params and function returns.
 * 
 * Client side code could call .validate() for params to avoid unnecessary API calls, 
 * however this is not a good idea as the server might have a newer version of the schema and the client could be working with an object obtained from the API.
 */
module.exports=
class ObjectBase
{
	constructor(
		object, 
		{
			applySchemaDefaults = false, 
			destroyInputReadOnlyProperties = false, 
			objDefaultOverride = {}, 
			objReadOnlyOverride = {},
			propertyPath = "",
			disallowUndefinedProperties = true
		} = {}
	)
	{
		if(typeof applySchemaDefaults !== "boolean")
		{
			throw new TypeError("applySchemaDefaults needs to be of type Boolean");
		}
		
		if(typeof destroyInputReadOnlyProperties !== "boolean")
		{
			throw new TypeError("destroyInputReadOnlyProperties needs to be of type Boolean");
		}
		
		if(typeof objDefaultOverride !== "object" || objDefaultOverride === null)
		{
			throw new TypeError("objDefaultOverride needs to be of type Object");
		}
		
		if(typeof objReadOnlyOverride !== "object" || objReadOnlyOverride === null)
		{
			throw new TypeError("objReadOnlyOverride needs to be of type Object");
		}
		
		if(typeof object !== "object" || object === null)
		{
			throw new TypeError("object needs to be of type Object");
		}
		
		if(typeof propertyPath !== "string")
		{
			throw new TypeError("propertyPath needs to be of type string");
		}

		if(typeof disallowUndefinedProperties !== "boolean")
		{
			throw new TypeError("disallowUndefinedProperties needs to be of type boolean");
		}
		
		propertyPath += `(${this.constructor.name})`;

		const errorMessages = [];

		
		const objFinal = {};


		if(this._schemaDefinition().type !== "object")
		{
			throw new Error(`Unsupported schema. The only supported value for the type property of the schema is "object"`);
		}
		
		
		// objDefaultOverride is the first to be used as default (has priority over any other defaults).
		Object.assign(objFinal, objDefaultOverride, object);
		

		const arrUndefinedPropertyNames = [];

		// Only copying values from properties which are also defined on the schema.
		// All other properties are ignored and will not land on the current class instance.
		for(const strPropertyName in this._schemaDefinition().properties)
		{
			if(!objFinal.hasOwnProperty(strPropertyName))
			{
				objFinal[strPropertyName] = undefined;
			}
			
			if(
				applySchemaDefaults
				&& objFinal[strPropertyName] === undefined
				&& this._schemaDefinition().properties[strPropertyName].hasOwnProperty("default")
			)
			{
				objFinal[strPropertyName] = this._schemaDefinition().properties[strPropertyName].default;
			}
			
			if(this._schemaDefinition().properties[strPropertyName].readonly)
			{
				if(objReadOnlyOverride.hasOwnProperty(strPropertyName))
				{
					objFinal[strPropertyName] = objReadOnlyOverride[strPropertyName];
				}
				else if(
					destroyInputReadOnlyProperties
					&& objFinal[strPropertyName] !== this._schemaDefinition().properties[strPropertyName].default
				)
				{
					objFinal[strPropertyName] = undefined;
				}
			}
			
			
			const objProperty = this._schemaDefinition().properties[strPropertyName];
			
			const arrPropertyTypes = (Array.isArray(objProperty.type) ? objProperty.type : [objProperty.type]);
			const objPropertyCanBe = this._propertyCanBe(arrPropertyTypes, objProperty);

			
			objFinal[strPropertyName] = this._validateItem({value: objFinal[strPropertyName], propertyPath: `${propertyPath}${strPropertyName}`, objPropertyCanBe, errorMessages, objProperty, arrPropertyTypes, applySchemaDefaults, destroyInputReadOnlyProperties});
			
			
			// Only keeping properties which are also defined by the schema.
			this[strPropertyName] = objFinal[strPropertyName];
		}
		
		
		this.type = this.constructor.name;


		if(arrUndefinedPropertyNames.length && disallowUndefinedProperties)
		{
			errorMessages.push(`These properties were not specified or were specified as undefined: \n${arrUndefinedPropertyNames.join(", \n")}`);
		}
		

		if(errorMessages.length)
		{
			throw new Error(`${errorMessages.join(` \n`)} \n`);
		}
		
		
		// At this point all properties exist on the current instance, even if undefined values were allowed.
		Object.seal(this);
	}


	_validateItem({value, propertyPath, objPropertyCanBe, errorMessages, objProperty, arrPropertyTypes, destroyInputReadOnlyProperties, applySchemaDefaults, bEnumSupported = true})
	{
		if(value === null)
		{
			if(!objPropertyCanBe.Null)
			{
				errorMessages.push(`${propertyPath} was passed as a Null but the ${this.constructor.name} schema only allows: ${JSON.stringify(objProperty.type)}.`);
			}
		}
		else if(Array.isArray(value))
		{
			// Fix for input from PHP clients which can't easily add an empty object when serializing empty associative arrays via standard json_encode() - PHP serializes [] and array() as '[]' as it cannot know if an empty array is associative or not.
			// (programmer would need to use \stdClass in an extremely cumbersome way just before serializing anything over JSON-RPC - which may be an impossible situation as far as deciding when to use \stdClass).
			if(
				value.length === 0
				&& objPropertyCanBe.Object
				&& !objPropertyCanBe.Array
			)
			{
				value = {};
			}
			else if(!objPropertyCanBe.Array && !objPropertyCanBe.Anything)
			{
				errorMessages.push(`${propertyPath} was passed as an Array but the ${this.constructor.name} schema only allows: ${JSON.stringify(objProperty.type)}.`);
			}
			else
			{
				for(let nIndex = 0; nIndex < value.length; nIndex++)
				{
					if(
						objProperty.items
						&& typeof objProperty.items === "object" 
						&& objProperty.items.type
					)
					{
						if(Array.isArray(value[nIndex]))
						{
							const arrArrayOfArrayTypes = [];
							for(const strType of Array.isArray(objProperty.items.type) ? objProperty.items.type : [objProperty.items.type])
							{
								if(strType.match(/^\[[a-z0-9_]+\]$/i))
								{
									arrArrayOfArrayTypes.push(strType.substr(1, strType.length - 2));
								}
							}

							if(!arrArrayOfArrayTypes.length)
							{
								errorMessages.push(`${propertyPath} was passed as an Array of Arrays but the ${this.constructor.name} schema doesn't allow Array of Arrays here.`);
							}
							else
							{
								for(let nIndexDeep = 0; nIndexDeep < value[nIndex].length; nIndexDeep++)
								{
									const objPropertyCanBe = this._propertyCanBe(arrArrayOfArrayTypes, {type: arrArrayOfArrayTypes, default: undefined, enum: undefined});
		
									value[nIndex][nIndexDeep] = this._validateItem({
										value: value[nIndex][nIndexDeep], 
										propertyPath: `${propertyPath}[${nIndex}][${nIndexDeep}]`, 
										objPropertyCanBe, 
										errorMessages, 
										arrPropertyTypes: arrArrayOfArrayTypes, 
										applySchemaDefaults, 
										destroyInputReadOnlyProperties, 
										objProperty: {type: arrArrayOfArrayTypes, default: undefined, enum: undefined}
									});
								}
							}
						}
						else
						{
							const arrPropertyTypes = (Array.isArray(objProperty.items.type) ? objProperty.items.type : [objProperty.items.type]);
							const objPropertyCanBe = this._propertyCanBe(arrPropertyTypes, objProperty.items);

							value[nIndex] = this._validateItem({
								value: value[nIndex], 
								propertyPath: `${propertyPath}[${nIndex}]`, 
								objPropertyCanBe, 
								errorMessages, 
								arrPropertyTypes, 
								applySchemaDefaults, 
								destroyInputReadOnlyProperties, 
								objProperty: objProperty.items
							});
						}
					}
				}
			}
		}
		else if(typeof value === "object" && value !== null)
		{
			if(!objPropertyCanBe.Object && !objPropertyCanBe.Anything)
			{
				errorMessages.push(`${propertyPath} was passed as an Object but the ${this.constructor.name} schema only allows: ${JSON.stringify(objProperty.type)}.`);
			}
			else if(
				value.type
				&& arrPropertyTypes.includes(value.type)
			)
			{
				if(require.resolve(`./${value.type}`))
				{
					const classReference = require(`./${value.type}`);

					if(classReference)
					{
						value = new classReference(value, {applySchemaDefaults, destroyInputReadOnlyProperties, propertyPath: `${propertyPath}`});
					}
				}
			}
			else
			{
				for(const strKey in value)
				{
					const item = value[strKey];
					
					// Convert generic object to schema based class instance to enable deeper validation and schema enforcing.
					if(
						typeof item === "object" 
						&& item !== null
						&& item.type
						&& arrPropertyTypes.includes(`{${item.type}}`)
					)
					{
						if(require.resolve(`./${item.type}`))
						{
							const classReference = require(`./${item.type}`);

							if(classReference)
							{
								value[strKey] = new classReference(item, {applySchemaDefaults, destroyInputReadOnlyProperties, propertyPath: `${propertyPath}["${strKey}"]`});
							}
						}
					}
				}
			}
		}
		else if(typeof value === "string")
		{
			if(!objPropertyCanBe.String && !objPropertyCanBe.Anything)
			{
				if(
					objPropertyCanBe.Integer
					&& /(^[\-+]{1}[0-9]{1,}$)|(^[0-9]{1,}$)/.test(value)
					&& Number.isFinite(parseInt(value))
				)
				{
					value = parseInt(value);
				}
				else if(
					(
						objPropertyCanBe.Float
						|| objPropertyCanBe.Number
					)
					&& /(^[\-+]{1}[0-9]{1,}$)|(^[0-9]{1,}$)|(^[\-+]{1}[0-9]{1,}\.[0-9]{1,}$)|(^[0-9]{1,}\.[0-9]{1,}$)/.test(value)
					&& Number.isFinite(parseFloat(value))
				)
				{
					value = parseFloat(value);
				}
				else if(
					objPropertyCanBe.Boolean 
					&& (
						value === "0" 
						|| value === "1" 
					)
				)
				{
					value = !!parseInt(value);
				}
				else if(
					objPropertyCanBe.Boolean 
					&& (
						value.toLowerCase() === "true" 
						|| value.toLowerCase() === "false"
					)
				)
				{
					value = value.toLowerCase() === "true";
				}
				else if(
					objPropertyCanBe.Boolean 
					&& (
						value === "T" 
						|| value === "F"
					)
				)
				{
					value = value === "T"
				}
				else
				{
					errorMessages.push(`${propertyPath} was passed as a String (${JSON.stringify(value)}) but the ${this.constructor.name} schema only allows: ${JSON.stringify(objProperty.type)}.`);
				}
			}

			if(typeof value === "string")
			{
				if(objProperty.pattern && !(new RegExp(`${objProperty.pattern}`).test(value)))
				{
					errorMessages.push(`${propertyPath} with value ${value} failed the regex test ${objProperty.pattern}`);
				}
				
				if(objProperty.hasOwnProperty("maxLength") && value.length > objProperty.maxLength)
				{
					errorMessages.push(`${propertyPath} value ${value} is longer than the allowed maximum length of ${maxLength}`);
				}
				
				if(objProperty.hasOwnProperty("minLength") && value.length < objProperty.minLength)
				{
					errorMessages.push(`${propertyPath} value ${value} is shorter than the required minimum length of ${minLength}`);
				}
			}
		}
		else if(typeof value === "number")
		{
			if(!objPropertyCanBe.Number && !objPropertyCanBe.Float && !objPropertyCanBe.Integer && !objPropertyCanBe.Anything)
			{
				if(objPropertyCanBe.Boolean && (value === 0 || value === 1))
				{
					value = !!value;
				}
				else if(objPropertyCanBe.String)
				{
					value = String(value);
				}
				else
				{
					errorMessages.push(`${propertyPath} was passed as a Number but the ${this.constructor.name} schema only allows: ${JSON.stringify(objProperty.type)}.`);
				}
			}
			
			if(
				typeof value === "number"
				&& !objPropertyCanBe.Number
				&& !objPropertyCanBe.Float 
				&& objPropertyCanBe.Integer 
				&& !Number.isInteger(value)
			)
			{
				errorMessages.push(`${propertyPath} was passed as a Float but the ${this.constructor.name} schema only allows: ${JSON.stringify(objProperty.type)}.`);
			}


			if(objProperty.hasOwnProperty("minimum") && value < objProperty.minimum)
			{
				errorMessages.push(`${propertyPath} is less than the required minimum ${value} < ${objProperty.minimum}.`);
			}

			if(objProperty.hasOwnProperty("maximum") && value > objProperty.maximum)
			{
				errorMessages.push(`${propertyPath} is greater than the allowed maximum ${value} > ${objProperty.maximum}.`);
			}
		}
		else if(value === "boolean")
		{
			if(!objPropertyCanBe.Boolean)
			{
				errorMessages.push(`${propertyPath} was passed as a boolean but the ${this.constructor.name} schema only allows: ${JSON.stringify(objProperty.type)}.`);
			}
		}
		else if(value === undefined)
		{
			// Missing a default in the schema for a read-only property.
			if(applySchemaDefaults && objProperty.readonly)
			{
				if(objPropertyCanBe.Null)
				{
					value = null;
				}
				else if(objProperty.type === "array")
				{
					value = [];
				}
				else if(objProperty.type === "string")
				{
					value = "";
				}
				else if(objProperty.type === "number")
				{
					value = 0;
				}
				else if(objProperty.type === "null")
				{
					value = null;
				}
				else if(objProperty.type === "boolean")
				{
					value = false;
				}
				else if(objProperty.type === "float")
				{
					value = 0;
				}
				else if(objProperty.type === "integer")
				{
					value = 0;
				}
				else if(objProperty.type === "mixed")
				{
					value = null;
				}
				else if(objProperty.type === "unknown")
				{
					value = null;
				}
				else if(objProperty.type === "object")
				{
					value = {};
				}
				else
				{
					value = {};
				}
			}
			else
			{
				arrUndefinedPropertyNames.push(propertyPath);
			}
		}
		else
		{
			errorMessages.push(`${propertyPath} contains an unhandled value type: ${typeof value}.`);
		}


		if(
			bEnumSupported
			&& objProperty.enum
			&& Array.isArray(objProperty.enum)
		)
		{
			if(value === null)
			{
				if(!objPropertyCanBe.Null)
				{
					errorMessages.push(`${propertyPath} was passed as a null but the ${this.constructor.name} schema only allows: ${JSON.stringify(objProperty.type)}.`);
				}
			}
			else if(!objProperty.enum.includes(value))
			{
				if(value instanceof ObjectBase)
				{
					if(!objProperty.enum.includes(value.constructor.name))
					{
						errorMessages.push(`${propertyPath} in ${this.constructor.name} enum only allows: ${objProperty.enum.join(", ")}, found ${value.constructor.name}.`);
					}
				}
				else
				{
					errorMessages.push(`${propertyPath} in ${this.constructor.name} enum only allows: ${objProperty.enum.join(", ")}, found ${typeof value === null ? "null" : typeof value}.`);
				}
			}
		}

		return value;
	}


	_propertyCanBe(arrPropertyTypes, objProperty)
	{
		const objPropertyCanBe = {
			Array: false,
			Object: false,
			String: false,
			Anything: false,
			Number: false,
			Boolean: false,
			Float: false,
			Integer: false,
			Null: objProperty.default === null
		};
		
		for(const strType of arrPropertyTypes)
		{
			if(
				strType === "mixed" 
				|| strType === "unknown" 
			)
			{
				objPropertyCanBe.Anything = true;
			}
			else if(strType === "string")
			{
				objPropertyCanBe.String = true;
			}
			else if(strType === "null")
			{
				objPropertyCanBe.Null = true;
			}
			else if(strType === "boolean")
			{
				objPropertyCanBe.Boolean = true;
			}
			else if(strType === "integer")
			{
				objPropertyCanBe.Integer = true;
			}
			else if(strType === "float")
			{
				objPropertyCanBe.Number = true;
				objPropertyCanBe.Integer = true;
				objPropertyCanBe.Float= true;
			}
			else if(strType === "number")
			{
				objPropertyCanBe.Number = true;
				objPropertyCanBe.Integer = true;
				objPropertyCanBe.Float= true;
			}
			else if(
				strType === "array" 
				
				// "[ExampleSchemaName]" (array of instances of ExampleSchemaName).
				|| strType.match(/^\[[a-z0-9_]+\]$/i)
			)
			{
				objPropertyCanBe.Array = true;
			}
			else if(
				(
					strType === "object" 
				
					// "{ExampleSchemaName}(object of instances of ExampleSchemaName).
					|| strType.match(/^\{[a-z0-9_]+\}$/i)
				)
				|| (
					!["integer", "string", "number", "float", "boolean", "array", "null", "mixed", "unknown"].includes(strType)
					&& strType.match(/^[a-z_]{1}[a-z0-9_]{0,}$/i)
				)
			)
			{
				objPropertyCanBe.Object = true;
			}
			else
			{
				throw new Error(`Unhandled property type ${strType}`);
			}

			if(
				objProperty.enum
				&& Array.isArray(objProperty.enum)
				&&  (
					// Lots of schemas validated by the old implementation were created with "null" in the enum which is suposed to actually be null.
					// Keeping backward compatibility,
					objProperty.enum.includes("null")

					|| objProperty.enum.includes(null)
				)
			)
			{
				objPropertyCanBe.Null = true;
			}
		}

		return objPropertyCanBe;
	}

	
	
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		throw new Error("Must override _schemaDefinition() in subclasses.");
		
		// Example schema:
		return {
			"description": "This is an example schema definition.",
			"type": "object",
			"properties": {
				"example_label": {
					"type": [
						"null",
						"string"
					],
					"description": "",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"example_subdomain_permanent": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"readonly": true
				},
				"example_anything_goes": {
					"type": "mixed",
					"description": "Mixed means any type."
				},
				"example_truthy": {
					"type": "boolean",
					"description": ""
				},
				"example_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 16,
					"description": "",
					"default": 1
				},
				"example_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "",
					"default": null,
					"readonly": true
				},
				"example_service_status": {
					"enum": [
						"ordered",
						"active",
						"suspended",
						"stopped",
						"deleted"
					],
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"readonly": true
				},
				"example_credentials": {
					"type": [
						"ExampleCredentials",
						"null"
					],
					"description": "ExampleCredentials is another schema like this one.",
					"default": null,
					"readonly": true
				},
				"example_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ObjectBase"
					],
					"readonly": true
				}
			}
		};
	}
};
