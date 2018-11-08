const APIObjects = require("./objects");

/**
 * @class
 */
module.exports =
class Utils
{
	/**
	 * Serializes an instance of a class and returns a JSON of it.
	 * @param {Object} objClass
	 * @returns {*} mxJSON
	 */
	static Serialize(objClass)
	{
		if(objClass instanceof APIObjects.ObjectBase)
		{
			const arrPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(objClass));
			arrPropertyNames.shift();

			const objTmp = {};
			for(let property in objClass)
			{
				let strPropertyName = property;
				if(arrPropertyNames.find((element) => {
					return element === property.substr(1);
				}) !== undefined)
				{
					strPropertyName = property.substr(1);
				}

				if(objClass[property] instanceof Object)
				{
					const objValue = objClass[property];

					if(objValue instanceof APIObjects.ObjectBase)
					{
						objTmp[strPropertyName] = Utils.Serialize(objClass[property]);
					}
					else
					{
						let objTmp2 = {};
						if(Object.prototype.toString.call(objValue) === "[object Array]")
						{
							objTmp2 = [];
						}

						let found = false;
						for(let objProperty in objValue)
						{
							if(objValue.hasOwnProperty(objProperty))
							{
								found = true;
								if(objValue[objProperty] instanceof Object)
								{
									objTmp2[objProperty] = Utils.Serialize(objValue[objProperty]);
								}
								else
								{
									objTmp2[objProperty] = objValue[objProperty];
								}
							}
						}
						if(!found)
						{
							objTmp[strPropertyName] = Utils.Serialize(objClass[property]);
						}
						else
						{
							objTmp[strPropertyName] = objTmp2;
						}
					}
				}
				else
				{
					objTmp[strPropertyName] = objClass[property];
				}
			}

			return objTmp;
		}
		else if(objClass instanceof Object)
		{
			return objClass;
		}
		else
		{
			throw Error("Invalid object.");
		}
	}

	/**
	 * Deserializes a JSON and turns it into an instance of the corresponding class.
	 * @param {*} mxJSON
	 * @param {Object} objClass = null
	 * @returns {Object} objRes - The newly created object.
	 */
	static Deserialize(mxJSON, objClass = null)
	{
		if(mxJSON instanceof APIObjects.ObjectBase)
		{
			return mxJSON;
		}

		if(
			objClass === null 
			|| objClass === undefined 
			|| !(objClass.prototype instanceof APIObjects.ObjectBase)
		)
		{

			if(APIObjects[mxJSON.type] && (APIObjects[mxJSON.type].prototype instanceof APIObjects.ObjectBase))
			{
				objClass = APIObjects[mxJSON.type];
			}
			else
			{
				throw Error("Invalid class.");
			}
		}

		const arrParams = [];
		for(let nIndex = 0; nIndex < objClass.JSONRequired.length; nIndex++)
		{
			let bInJSON = false;
			for(let strJSONProperty in mxJSON)
			{
				if(mxJSON.hasOwnProperty(strJSONProperty))
				{
					if(strJSONProperty === objClass.JSONRequired[nIndex])
					{
						arrParams.push(mxJSON[strJSONProperty]);
						bInJSON = true;
						break;
					}
				}
			}
			if(!bInJSON)
			{
				throw Error("Missing property \"" + objClass.JSONRequired[nIndex] + "\" in JSON.");
			}
		}

		const objRes = new (Function.prototype.bind.apply(objClass, [null].concat(arrParams)))();

		const arrPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(objRes));
		arrPropertyNames.shift();

		for(let strJSONProperty in mxJSON)
		{
			let bInClass = false;
			for(let strObjectProperty in arrPropertyNames)
			{
				if(strJSONProperty === arrPropertyNames[strObjectProperty])
				{
					bInClass = true;
					break;
				}
			}
			if(!bInClass)
			{
				//throw Error("Missing property \"" + strJSONProperty + "\" in class.");
			}
		}

		for(let strObjectProperty in arrPropertyNames)
		{
			for(let strJSONProperty in mxJSON)
			{
				if(arrPropertyNames[strObjectProperty] === strJSONProperty)
				{
					objRes[String(arrPropertyNames[strObjectProperty])] = mxJSON[strJSONProperty];
				}
			}
		}

		return objRes;
	}
};
