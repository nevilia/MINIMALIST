// index.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import { errorHandler } from './utils/errorHandler';
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || '');

app.use(cors())

app.use(express.json());
app.use('/api', productRoutes);
// app.use('')
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
