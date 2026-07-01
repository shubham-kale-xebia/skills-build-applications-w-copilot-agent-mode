"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.getMongoUri = exports.DATABASE_URI = exports.DATABASE_NAME = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.DATABASE_NAME = 'octofit_db';
exports.DATABASE_URI = process.env.MONGO_URI || `mongodb://127.0.0.1:27017/${exports.DATABASE_NAME}`;
const getMongoUri = () => exports.DATABASE_URI;
exports.getMongoUri = getMongoUri;
const connectDatabase = () => mongoose_1.default.connect(exports.DATABASE_URI);
exports.connectDatabase = connectDatabase;
