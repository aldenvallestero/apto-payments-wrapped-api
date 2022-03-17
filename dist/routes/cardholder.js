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
const express_1 = __importDefault(require("express"));
const cardholder_1 = __importDefault(require("../controllers/cardholder"));
const router = express_1.default.Router();
router
    .post('/verify/start', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cardholder = new cardholder_1.default();
    let secret = yield cardholder.verify_start(req.body.country_code, req.body.phone_number);
    return res.json({
        status: 200,
        message: '',
        data: secret
    });
}))
    .put('/verify/confirm', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cardholder = new cardholder_1.default();
    let cardholder_verification = yield cardholder.verify_confirm(req.body.verification_id, req.body.secret);
    return res.json({
        status: 200,
        message: '',
        data: cardholder_verification
    });
}))
    .post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let country_code = req.body.country_code;
    let phone_number = req.body.phone_number;
    let verification_id = req.body.verification_id;
    let document_id = req.body.document_id;
    let country = req.body.country;
    let document_type = req.body.document_type;
    let email = req.body.email;
    let birthday = req.body.birthday;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let street1 = req.body.street1;
    let street2 = req.body.street2;
    let locality = req.body.locality;
    let region = req.body.region;
    let postal_code = req.body.postal_code;
    let cardholder = new cardholder_1.default();
    let registered_cardholder = yield cardholder.register(country_code, phone_number, verification_id, document_id, country, document_type, email, birthday, first_name, last_name, street1, street2, locality, region, postal_code);
    return res.json({
        status: 200,
        message: '',
        data: registered_cardholder
    });
}))
    .post('/agreement', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let session_id = req.body.session_id;
    let workflow_object_id = req.body.workflow_object_id;
    let action_id = req.body.action_id;
    let cardholder = new cardholder_1.default();
    yield cardholder.agree(session_id, workflow_object_id, action_id);
    return res.sendStatus(200);
}))
    .put('/agreement', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cardholder = new cardholder_1.default();
    yield cardholder.confirm(req.body.session_id, req.body.application_id);
    return res.sendStatus(201);
}));
exports.default = router;
