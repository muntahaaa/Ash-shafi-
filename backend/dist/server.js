"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("./lib/mongodb");
const doctors_1 = require("./routes/doctors");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 4000);
const corsOrigin = process.env.CORS_ORIGIN ?? '*';
app.use((0, cors_1.default)({
    origin: corsOrigin === '*' ? '*' : corsOrigin.split(',').map((item) => item.trim()),
}));
app.use(express_1.default.json({ limit: '1mb' }));
app.get('/health', (_request, response) => {
    response.json({ ok: true });
});
app.use('/doctors', doctors_1.doctorsRouter);
async function start() {
    await (0, mongodb_1.connectToDatabase)();
    app.listen(port, () => {
        console.log(`Backend listening on http://localhost:${port}`);
    });
}
start().catch((error) => {
    console.error('Failed to start backend', error);
    process.exit(1);
});
