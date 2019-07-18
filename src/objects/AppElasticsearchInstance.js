const ObjectBase = require('./ObjectBase');

/**
 * Details about the Instance object specific to Elasticsearch. The information
 * presented here is obtained by interrogating the Elasticsearch API. Backward
 * compatibility object will not be ensured when the underlying Elasticsearch
 * API changes.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppElasticsearchInstance extends ObjectBase
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
	 * The user interface URL.
	 */
	get ui_url()
	{
		return (this._ui_url !== undefined ? this._ui_url : null);
	}

	set ui_url(ui_url)
	{
		this._ui_url = ui_url;
	}

	/**
	 * Percentage of time CPU is running in system mode and user mode. Being a
	 * multiprocessor system, the usage can be greater than 100%.
	 */
	get cpu_usage_percent()
	{
		return (this._cpu_usage_percent !== undefined ? this._cpu_usage_percent : null);
	}

	set cpu_usage_percent(cpu_usage_percent)
	{
		this._cpu_usage_percent = cpu_usage_percent;
	}

	/**
	 * Total physical memory available.
	 */
	get memory_total_gb()
	{
		return (this._memory_total_gb !== undefined ? this._memory_total_gb : null);
	}

	set memory_total_gb(memory_total_gb)
	{
		this._memory_total_gb = memory_total_gb;
	}

	/**
	 * Percentage of used physical memory.
	 */
	get memory_used_percent()
	{
		return (this._memory_used_percent !== undefined ? this._memory_used_percent : null);
	}

	set memory_used_percent(memory_used_percent)
	{
		this._memory_used_percent = memory_used_percent;
	}

	/**
	 * Total disk capacity. It might take a while until the property is populated.
	 */
	get fs_memory_total_gb()
	{
		return (this._fs_memory_total_gb !== undefined ? this._fs_memory_total_gb : null);
	}

	set fs_memory_total_gb(fs_memory_total_gb)
	{
		this._fs_memory_total_gb = fs_memory_total_gb;
	}

	/**
	 * Percentage of used disk capacity. It might take a while until the property
	 * is populated.
	 */
	get fs_memory_used_gb()
	{
		return (this._fs_memory_used_gb !== undefined ? this._fs_memory_used_gb : null);
	}

	set fs_memory_used_gb(fs_memory_used_gb)
	{
		this._fs_memory_used_gb = fs_memory_used_gb;
	}

	/**
	 * Software version number.
	 */
	get version()
	{
		return (this._version !== undefined ? this._version : null);
	}

	set version(version)
	{
		this._version = version;
	}

	/**
	 * The Elasticsearch node ID.
	 */
	get node_id()
	{
		return (this._node_id !== undefined ? this._node_id : null);
	}

	set node_id(node_id)
	{
		this._node_id = node_id;
	}

	/**
	 * The ID of the Instance associated with the node.
	 */
	get instance_id()
	{
		return (this._instance_id !== undefined ? this._instance_id : null);
	}

	set instance_id(instance_id)
	{
		this._instance_id = instance_id;
	}

	/**
	 * The label of the Instance associated with the node.
	 */
	get instance_label()
	{
		return (this._instance_label !== undefined ? this._instance_label : null);
	}

	set instance_label(instance_label)
	{
		this._instance_label = instance_label;
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