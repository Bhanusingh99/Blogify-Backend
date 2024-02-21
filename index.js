import express from 'express';
import cors from 'cors';
import userRouter from './src/routes/user.routes.js';
import { connectionDb } from './src/db/connectionDb.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import { getUserInfo } from './src/helper/getUserInfo.js';

const app = express();
dotenv.config()
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', userRouter);
connectionDb();

app.get("/get-cookie",(req,res)=>{
    const cookies = req.cookies.token;
    const data = getUserInfo(cookies);
    console.log(data.id)
    res.json({
        message:data
    })
})


app.listen(4000, (req,res) => {
    console.log("app is listening")
});

