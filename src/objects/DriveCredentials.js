const ObjectBase = require('./ObjectBase');

/**
 * Information to connect via iSCSI or bootable drive associated credentials.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DriveCredentials extends ObjectBase
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
	 * iSCSI credentials
	 */
	get iscsi()
	{
		return (this._iscsi !== undefined ? this._iscsi : null);
	}

	set iscsi(iscsi)
	{
		this._iscsi = iscsi;
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