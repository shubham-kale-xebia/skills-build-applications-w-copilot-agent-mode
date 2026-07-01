import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import { getApiBaseUrl, getMongoUri } from './config';

const app = express();
const port = Number(process.env.PORT || 8000);
const mongoUri = getMongoUri();

app.use(express.json());
app.use(router);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', apiBaseUrl: getApiBaseUrl() });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Backend running on port ${port}`);
      console.log(`API base URL: ${getApiBaseUrl()}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });
