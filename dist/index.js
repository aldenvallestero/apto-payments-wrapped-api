"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const card_1 = __importDefault(require("./routes/card"));
const cardholder_1 = __importDefault(require("./routes/cardholder"));
const fund_1 = __importDefault(require("./routes/fund"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: __dirname + '/.env' });
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/card', card_1.default);
app.use('/api/v1/cardholder', cardholder_1.default);
app.use('/api/v1/fund', fund_1.default);
const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log('Server started running on port', PORT));
