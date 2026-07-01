"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoUri = exports.getApiBaseUrl = void 0;
const getApiBaseUrl = () => {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
};
exports.getApiBaseUrl = getApiBaseUrl;
const getMongoUri = () => process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
exports.getMongoUri = getMongoUri;
