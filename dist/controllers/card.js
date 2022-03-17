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
class Card {
    create(session_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.aptopayments.com/v1/user/accounts/apply',
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({ "card_product_id": `${process.env.APTO_CARD_PROGRAM}` })
            })
                .then(result => {
                return result.data;
            });
        });
    }
    retrieve(session_id, account_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.aptopayments.com/v1/user/accounts/${account_id}`,
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((result) => {
                return result.data;
            });
        });
    }
    physical(session_id, account_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: `https://api.aptopayments.com/v1/user/accounts/${account_id}/order_physical`,
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`
                }
            });
            return;
        });
    }
    issue(session_id, application_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.aptopayments.com/v1/user/accounts/issuecard',
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({ "application_id": `${application_id}` })
            })
                .then(result => {
                return result.data;
            });
        });
    }
    transactions(session_id, account_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.aptopayments.com/v1/user/accounts/${account_id}/transactions`,
                headers: {
                    'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                    'Authorization': `Bearer ${session_id}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((result) => {
                return result.data;
            });
        });
    }
}
exports.default = Card;
