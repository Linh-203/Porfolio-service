import express from 'express';
import productRouter from './routes/product';
import categoryRouter from './routes/category';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// config
dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

//router
app.use('/api', productRouter);
app.use('/api', categoryRouter);

// connect to db
mongoose.connect(
  'mongodb+srv://linhvh203:Linhdz112003%40@portfolio.qifyxg6.mongodb.net/?retryWrites=true&w=majority'
);
// mongodb+srv://linhvh203:Linhdz112003%40@portfolio.qifyxg6.mongodb.net/?retryWrites=true&w=majority

export const viteNodeApp = app;
