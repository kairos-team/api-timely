import express from 'express';
import dotenv from 'dotenv';
import Database from '@config/database';
import router from './routes';
import errorMiddleware from './middlewares/errorMiddleware';

dotenv.config();

const app = express();

app.use(express.json());

Database.connect();

app.use('/api', router);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('🚀 Scheduling API is running!');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🔥 Server is running on port ${PORT}`);
});
