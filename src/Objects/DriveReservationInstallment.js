const ObjectBase = require("../ObjectBase");

module.exports = 
class DriveReservationInstallment extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Represents a cyclical installment of a reservation created with a specific Drive capacity.",
			"type": "object",
			"properties": {
				"drive_reservation_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the reservation.",
					"default": null,
					"readonly": true
				},
				"drive_reservation_installment_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the reservation installment.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_installment_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time when the reservation installment was created. Is an ISO 8601 timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_installment_start_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time when the reservation becomes active. Is an ISO 8601 timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_installment_end_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time when the reservation installment expires. Is an ISO 8601 timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_installment_price": {
					"type": [
						"number",
						"null"
					],
					"description": "The costs of all the reserved resources for the duration of the installment.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_installment_price_currency": {
					"type": [
						"string",
						"null"
					],
					"description": "The currency used to calculate the price.",
					"default": null,
					"readonly": true
				},
				"resource_reservation_installment_status": {
					"enum": [
						"active",
						"stopped"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the reservation installment.",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"DriveReservationInstallment"
					],
					"readonly": true
				}
			}
		};
	}
};
