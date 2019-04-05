const ObjectBase = require('./ObjectBase');

/**
 * Contains server connectivity information.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ServerInterface extends ObjectBase
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
	 * The server's interface mac address.
	 */
	get server_interface_mac_address()
	{
		return (this._server_interface_mac_address !== undefined ? this._server_interface_mac_address : null);
	}

	set server_interface_mac_address(server_interface_mac_address)
	{
		this._server_interface_mac_address = server_interface_mac_address;
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