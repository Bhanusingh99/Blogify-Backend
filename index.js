import express from 'express';
import cors from 'cors';
import userRouter from './src/routes/user.routes.js';
import { connectionDb } from './src/db/connectionDb.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', userRouter);
connectionDb();

app.listen(4000, () => {
    console.log('app is listening to port 4000');
});
