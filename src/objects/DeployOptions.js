const ObjectBase = require('./ObjectBase');

/**
 * Object used to specify the server types for new Instances provisioned on the
 * InstanceArrays of an Infrastructure.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DeployOptions extends ObjectBase
{
	constructor()
	{
		super();

		const arrPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
		arrPropertyNames.shift();

		for(let strProperty in arrPropertyNames)
		{
			if(arrPropertyNames.hasOwnProperty(strProperty))
			{
				const strPropertyProtected = "_" + arrPropertyNames[strProperty];
				this[strPropertyProtected] = this[arrPropertyNames[strProperty]];
			}
		}
	}

	/**
	 * Server types for new Instances provisioned on a single InstanceArray.
	 */
	get instance_array()
	{
		return (this._instance_array !== undefined ? this._instance_array : {});
	}

	set instance_array(instance_array)
	{
		this._instance_array = instance_array;
	}

	/**
	 * The schema type
	 */
	get type()
	{
		return (this._type !== undefined ? this._type : null);
	}

	set type(type)
	{
		this._type = type;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [

		];
	}
};