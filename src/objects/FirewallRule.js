const ObjectBase = require('./ObjectBase');

/**
 * A Firewall rule.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class FirewallRule extends ObjectBase
{
	constructor(firewall_rule_ip_address_type)
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

		if(firewall_rule_ip_address_type === undefined || firewall_rule_ip_address_type === null)
			throw new Error("Invalid param in FirewallRule constructor.");

		this._firewall_rule_ip_address_type = firewall_rule_ip_address_type;
	}

	/**
	 * Describes the FirewallRule.
	 */
	get firewall_rule_description()
	{
		return (this._firewall_rule_description !== undefined ? this._firewall_rule_description : "Rule description.");
	}

	set firewall_rule_description(firewall_rule_description)
	{
		this._firewall_rule_description = firewall_rule_description;
	}

	/**
	 * The port range start of the firewall rule. When null, no ports are being
	 * taken into consideration when applying the firewall rule.
	 */
	get firewall_rule_port_range_start()
	{
		return (this._firewall_rule_port_range_start !== undefined ? this._firewall_rule_port_range_start : null);
	}

	set firewall_rule_port_range_start(firewall_rule_port_range_start)
	{
		this._firewall_rule_port_range_start = firewall_rule_port_range_start;
	}

	/**
	 * The port range end of the firewall rule. When null, no ports are being taken
	 * into consideration when applying the firewall rule.
	 */
	get firewall_rule_port_range_end()
	{
		return (this._firewall_rule_port_range_end !== undefined ? this._firewall_rule_port_range_end : null);
	}

	set firewall_rule_port_range_end(firewall_rule_port_range_end)
	{
		this._firewall_rule_port_range_end = firewall_rule_port_range_end;
	}

	/**
	 * The IP address range start of the firewall rule. When null, no source IP
	 * address is taken into consideration when applying the firewall rule.
	 */
	get firewall_rule_source_ip_address_range_start()
	{
		return (this._firewall_rule_source_ip_address_range_start !== undefined ? this._firewall_rule_source_ip_address_range_start : null);
	}

	set firewall_rule_source_ip_address_range_start(firewall_rule_source_ip_address_range_start)
	{
		this._firewall_rule_source_ip_address_range_start = firewall_rule_source_ip_address_range_start;
	}

	/**
	 * The IP address range end of the firewall rule. When null, no source IP
	 * address is taken into consideration when applying the firewall rule.
	 */
	get firewall_rule_source_ip_address_range_end()
	{
		return (this._firewall_rule_source_ip_address_range_end !== undefined ? this._firewall_rule_source_ip_address_range_end : null);
	}

	set firewall_rule_source_ip_address_range_end(firewall_rule_source_ip_address_range_end)
	{
		this._firewall_rule_source_ip_address_range_end = firewall_rule_source_ip_address_range_end;
	}

	/**
	 * The IP address range start of the firewall rule. When null, no destination
	 * IP address is taken into consideration when applying the firewall rule.
	 */
	get firewall_rule_destination_ip_address_range_start()
	{
		return (this._firewall_rule_destination_ip_address_range_start !== undefined ? this._firewall_rule_destination_ip_address_range_start : null);
	}

	set firewall_rule_destination_ip_address_range_start(firewall_rule_destination_ip_address_range_start)
	{
		this._firewall_rule_destination_ip_address_range_start = firewall_rule_destination_ip_address_range_start;
	}

	/**
	 * The IP address range end of the firewall rule. When null, no destination IP
	 * address is taken into consideration when applying the firewall rule.
	 */
	get firewall_rule_destination_ip_address_range_end()
	{
		return (this._firewall_rule_destination_ip_address_range_end !== undefined ? this._firewall_rule_destination_ip_address_range_end : null);
	}

	set firewall_rule_destination_ip_address_range_end(firewall_rule_destination_ip_address_range_end)
	{
		this._firewall_rule_destination_ip_address_range_end = firewall_rule_destination_ip_address_range_end;
	}

	/**
	 * The protocol of the firewall rule.
	 */
	get firewall_rule_protocol()
	{
		return (this._firewall_rule_protocol !== undefined ? this._firewall_rule_protocol : "all");
	}

	set firewall_rule_protocol(firewall_rule_protocol)
	{
		this._firewall_rule_protocol = firewall_rule_protocol;
	}

	/**
	 * The IP address type of the firewall rule.
	 */
	get firewall_rule_ip_address_type()
	{
		return (this._firewall_rule_ip_address_type !== undefined ? this._firewall_rule_ip_address_type : null);
	}

	set firewall_rule_ip_address_type(firewall_rule_ip_address_type)
	{
		this._firewall_rule_ip_address_type = firewall_rule_ip_address_type;
	}

	/**
	 * Specifies if the firewall rule will be applied or not.
	 */
	get firewall_rule_enabled()
	{
		return (this._firewall_rule_enabled !== undefined ? this._firewall_rule_enabled : true);
	}

	set firewall_rule_enabled(firewall_rule_enabled)
	{
		this._firewall_rule_enabled = firewall_rule_enabled;
	}

	/**
	 * The schema type.
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
			"firewall_rule_ip_address_type"
		];
	}
};