const ObjectBase = require("./ObjectBase");


module.exports = 
class DriveReservation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Represents a reservation created with a specific drive capacity.",
			"type": "object",
			"properties": {
				"user_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the user ID who has the reservation.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time when the reservation was created. Is an ISO 8601 timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_cycle_months": {
					"type": [
						"integer",
						"null"
					],
					"description": "Number of months in a reservation cycle.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_installment_cycle_months": {
					"type": [
						"integer",
						"null"
					],
					"description": "Number of months in a reservation installment cycle.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_end_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time when the reservation expires. Is an ISO 8601 timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_price": {
					"type": [
						"number",
						"null"
					],
					"description": "The cost of the reserved resource for a 30-day period.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_price_currency": {
					"type": [
						"string",
						"null"
					],
					"description": "The currency used to calculate the price.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_recurring": {
					"type": "boolean",
					"description": "If <code>true<\/code>, the reservation is automatically renewed for another cycle when reaching its expiration date.",
					"default": true
				},
				"resource_reservation_start_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time when the reservation becomes active. It is an hour later than <code>resource_reservation_created_timestamp<\/code>. Is an ISO 8601 timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.",
					"default": null,
					"readonly": true
				},
				"resource_utilization_price": {
					"type": [
						"number",
						"null"
					],
					"description": "This value overwrites the on-demand price when costs are calculated. If it is 0, using this resource will register no on-demand costs.",
					"default": null,
					"readonly": true
				},
				"resource_utilization_price_currency": {
					"type": [
						"string",
						"null"
					],
					"description": "The currency used to calculate the price for a single unit of time.",
					"default": null,
					"readonly": true
				},
				"resource_utilization_price_unit_seconds": {
					"type": [
						"integer",
						"null"
					],
					"description": "The unit of time measured in seconds.",
					"default": null,
					"readonly": true
				},
				"drive_reservation_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the reservation.",
					"default": null,
					"readonly": true
				},
				"drive_size_mbytes": {
					"type": "integer",
					"minimum": 2048,
					"maximum": 2097152,
					"description": "Represents the reserved Drive capacity.",
					"required": true
				},
				"drive_storage_type": {
					"enum": [
						"iscsi_ssd",
						"iscsi_hdd",
						"dummy"
					],
					"type": "string",
					"description": "Represents the reserved Drive\u2019s type of storage.",
					"default": "iscsi_ssd"
				},
				"resource_reservation_installments": {
					"type": "array",
					"items": {
						"description": "DriveReservationInstallment objects",
						"type": "DriveReservationInstallment"
					},
					"description": "All the <a:schema>DriveReservationInstallment<\/a:schema> objects associated with the reservation.",
					"default": [
						
					],
					"readonly": true
				},
				"resource_reservation_status": {
					"enum": [
						"active",
						"stopped"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the reservation.",
					"default": null,
					"readonly": true
				},
				"datacenter_name": {
					"type": [
						"string",
						"null"
					],
					"description": "The datacenter on which the reservation is made.",
					"default": null,
					"readonly": true
				},
				"user_plan_type": {
					"type": "string",
					"enum": [
						"vanilla",
						"starter",
						"starter_redundant",
						"custom"
					],
					"description": "The user plan type based on wich the reservation is made.",
					"default": "vanilla",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"DriveReservation"
					],
					"readonly": true
				}
			}
		};
	}
};
