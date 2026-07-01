export const getApiBaseUrl = () => {
  const codespaceName = process.env.CODESPACE_NAME;
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
};

export const getMongoUri = () => process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
