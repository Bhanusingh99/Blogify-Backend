import express from 'express';
import cors from 'cors';
import userRouter from './src/routes/user.routes.js';
import { connectionDb } from './src/db/connectionDb.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', userRouter);
connectionDb();

app.get("/get-cookie",(req,res)=>{
    const cookies = req.cookies.token;
    res.json({
        message:cookies
    })
})

app.listen(4000, () => {
    console.log("app is listening")
});
