import mongoose from 'mongoose';

export const DATABASE_NAME = 'octofit_db';
export const DATABASE_URI = process.env.MONGO_URI || `mongodb://127.0.0.1:27017/${DATABASE_NAME}`;

export const getMongoUri = () => DATABASE_URI;
export const connectDatabase = () => mongoose.connect(DATABASE_URI);
