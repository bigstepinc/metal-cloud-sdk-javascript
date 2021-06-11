const ObjectBase = require("../ObjectBase");

module.exports = 
class ServerTypeReservation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Represents a reservation created for a specific server type.",
			"type": "object",
			"properties": {
				"user_id": {
					"type": [
						"integer"
					],
					"description": "The user who owns and pays for the reservation.",
					"readonly": false,
					"required": true
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
						"integer"
					],
					"description": "Contract period size, which gets renewed automatically if this reservation is recurring.",
					"default": 12,
					"readonly": false,
					"required": false
				},
				"resource_reservation_installment_cycle_months": {
					"type": [
						"integer"
					],
					"description": "Billing cycle in months.",
					"default": 1,
					"readonly": false,
					"required": false
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
					"readonly": false,
					"required": false
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
					"default": true,
					"required": false,
					"readonly": false
				},
				"resource_reservation_start_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time when the reservation becomes active. It is an hour later than <code>resource_reservation_created_timestamp<\/code>. Is an ISO 8601 timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.",
					"default": null,
					"readonly": false,
					"required": false
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
				"server_type_reservation_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the reservation.",
					"default": null,
					"readonly": true
				},
				"server_type_id": {
					"type": [
						"integer"
					],
					"description": "The ID of the reserved server type.",
					"readonly": false,
					"required": true
				},
				"resource_reservation_installments": {
					"type": "array",
					"items": {
						"description": "ServerTypeReservationInstallment objects",
						"type": "ServerTypeReservationInstallment"
					},
					"description": "All the <a:schema>ServerTypeReservationInstallment<\/a:schema> objects associated with the reservation.",
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
						"string"
					],
					"description": "The datacenter on which the reservation is made.",
					"readonly": false,
					"required": true
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
					"readonly": false,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ServerTypeReservation"
					],
					"readonly": true
				}
			}
		};
	}
};
