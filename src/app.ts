import express from 'express';
import dotenv from 'dotenv';
import resumeRoutes from './routes/resumeRoutes';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', resumeRoutes);

export default app;
