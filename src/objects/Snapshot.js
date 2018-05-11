const ObjectBase = require('./ObjectBase');

/**
 * A snapshot of a drive created at a specific time.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Snapshot extends ObjectBase
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
	 * The snapshot's unique label is formed based on the snapshot_id and the
	 * snapshot_created_timestamp.
	 */
	get drive_snapshot_label()
	{
		return this._drive_snapshot_label || null;
	}

	set drive_snapshot_label(drive_snapshot_label)
	{
		this._drive_snapshot_label = drive_snapshot_label;
	}

	/**
	 * The ID of the snapshot.
	 */
	get drive_snapshot_id()
	{
		return this._drive_snapshot_id || null;
	}

	set drive_snapshot_id(drive_snapshot_id)
	{
		this._drive_snapshot_id = drive_snapshot_id;
	}

	/**
	 * The ID of the Drive after which the snapshot was created.
	 */
	get drive_id()
	{
		return this._drive_id || null;
	}

	set drive_id(drive_id)
	{
		this._drive_id = drive_id;
	}

	/**
	 * Date and time when the drive snapshot was created. An ISO 8601 timestamp
	 * showing UTC time. Example format: 2013-11-29T13:00:01Z.
	 */
	get drive_snapshot_created_timestamp()
	{
		return this._drive_snapshot_created_timestamp || null;
	}

	set drive_snapshot_created_timestamp(drive_snapshot_created_timestamp)
	{
		this._drive_snapshot_created_timestamp = drive_snapshot_created_timestamp;
	}

	/**
	 * The schema type
	 */
	get type()
	{
		return this._type || null;
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