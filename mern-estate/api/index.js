import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
})
.catch((err) =>{
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
});

app.use('/api/user', userRouter);
app.use('/api/user', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode, // after es6 we variable and key have same name we use only variable name
        message,
    });
}); //next for going to next middleware, err us for errir, req is request from user, res is from server