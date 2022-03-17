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
class Fund {
    create(session_id, pan, cvv, exp_date, last_four, postal_code) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.aptopayments.com/v1/payment_sources',
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "description": "Preferred Funding Source",
                    "type": "card",
                    "card": {
                        "pan": pan,
                        "cvv": cvv,
                        "exp_date": exp_date,
                        "last_four": last_four,
                        "postal_code": postal_code
                    }
                })
            });
            return;
        });
    }
    retrieve(session_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.aptopayments.com/v1/payment_sources`,
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json',
                }
            });
        });
    }
    delete(session_id, fund_source_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'delete',
                url: `https://api.aptopayments.com/v1/payment_sources/${fund_source_id}`,
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json'
                }
            });
        });
    }
    push(session_id, funding_source_id, balance_id, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: `https://api.aptopayments.com/payment_sources/${funding_source_id}/push`,
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    amount: { currency: "USD", amount },
                    balance_id
                })
            });
        });
    }
}
exports.default = Fund;
