"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const config_1 = require("./config");
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 8000);
const mongoUri = (0, config_1.getMongoUri)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', apiBaseUrl: (0, config_1.getApiBaseUrl)() });
});
app.listen(port, '0.0.0.0', () => {
    console.log(`Backend running on port ${port}`);
    console.log(`API base URL: ${(0, config_1.getApiBaseUrl)()}`);
});
mongoose_1.default
    .connect(mongoUri)
    .then(() => {
    console.log('MongoDB connected successfully');
})
    .catch((error) => {
    console.error('MongoDB connection failed:', error);
});
