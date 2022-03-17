"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Cardholder {
    verify_start(country_code, phone_number) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.aptopayments.com/v1/verifications/start',
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "datapoint": {
                        "data_type": "phone",
                        "country_code": country_code,
                        "phone_number": phone_number
                    },
                    "datapoint_type": "phone"
                })
            })
                .then(result => {
                return result.data;
            });
        });
    }
    verify_confirm(verification_id, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: `https://api.aptopayments.com/v1/verifications/${verification_id}/finish`,
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({ "secret": secret })
            })
                .then(result => {
                return result.data;
            });
        });
    }
    register(country_code, phone_number, verification_id, document_id, country, document_type, email, birthday, first_name, last_name, street1, street2, locality, region, postal_code) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.aptopayments.com/v1/user',
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "data_points": {
                        "type": "list",
                        "data": [
                            { "type": "phone", "country_code": country_code, "phone_number": phone_number, "verification": { "verification_id": verification_id } },
                            { "type": "id_document", "value": document_id, "country": country, "doc_type": document_type },
                            { "type": "email", "email": email },
                            { "type": "birthdate", "date": birthday },
                            { "type": "name", "first_name": first_name, "last_name": last_name },
                            { "type": "address", "street_one": street1, "street_two": street2, "locality": locality, "region": region, "postal_code": postal_code, "country": country }
                        ]
                    }
                })
            })
                .then(result => {
                return result.data;
            });
        });
    }
    agree(session_id, workflow_object_id, action_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.aptopayments.com/v1/disclaimers/accept',
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "workflow_object_id": workflow_object_id,
                    "action_id": action_id
                })
            });
            return;
        });
    }
    confirm(session_id, application_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.aptopayments.com/v1/user/accounts/applications/${application_id}/status`,
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`
                },
            });
            return;
        });
    }
}
exports.default = Cardholder;
