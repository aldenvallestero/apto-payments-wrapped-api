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
const fund_1 = __importDefault(require("../controllers/fund"));
const router = express_1.default.Router();
router
    .post('/push', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let session_id = req.body.session_id;
    let funding_source_id = req.body.funding_source_id;
    let balance_id = req.body.balance_id;
    let amount = req.body.amount;
    const fund = new fund_1.default();
    yield fund.push(session_id, funding_source_id, balance_id, amount);
    return res.sendStatus(201);
}))
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let session_id = req.body.session_id;
    let pan = req.body.pan;
    let cvv = req.body.cvv;
    let exp_date = req.body.exp_date;
    let last_four = req.body.last_four;
    let postal_code = req.body.postal_code;
    const fund = new fund_1.default();
    yield fund.create(session_id, pan, cvv, exp_date, last_four, postal_code);
    return res.sendStatus(201);
}))
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fund = new fund_1.default();
    const fund_source = fund.retrieve(req.body.session_id);
    return res.json({
        status: 200,
        message: '',
        data: fund_source
    });
}))
    .delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fund = new fund_1.default();
    yield fund.delete(req.body.session_id, req.body.fund_source_id);
    return res.sendStatus(202);
}));
exports.default = router;
