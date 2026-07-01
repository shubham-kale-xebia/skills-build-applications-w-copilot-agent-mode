import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import { getMongoUri } from './config';

const app = express();
const port = Number(process.env.PORT || 8000);
const mongoUri = getMongoUri();
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());
app.use(router);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', apiBaseUrl });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend running on port ${port}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });
