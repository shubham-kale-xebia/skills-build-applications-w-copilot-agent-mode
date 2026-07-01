"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiBaseUrl = exports.getMongoUri = exports.connectDatabase = exports.DATABASE_NAME = exports.DATABASE_URI = void 0;
var database_1 = require("./config/database");
Object.defineProperty(exports, "DATABASE_URI", { enumerable: true, get: function () { return database_1.DATABASE_URI; } });
Object.defineProperty(exports, "DATABASE_NAME", { enumerable: true, get: function () { return database_1.DATABASE_NAME; } });
Object.defineProperty(exports, "connectDatabase", { enumerable: true, get: function () { return database_1.connectDatabase; } });
Object.defineProperty(exports, "getMongoUri", { enumerable: true, get: function () { return database_1.getMongoUri; } });
const getApiBaseUrl = () => {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
};
exports.getApiBaseUrl = getApiBaseUrl;
