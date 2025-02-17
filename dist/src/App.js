import express, { urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import cookieparser from 'cookie-parser';
import authRouter from 'routes/auth.router';
import productRouter from 'routes/product.router';
import categoryRouter from 'routes/category.router';
import rateRouter from 'routes/rate.router';
import orderRouter from 'routes/order.router';
import userRouter from 'routes/user.router';
var app = express();
app.use(express.json({
    limit: '50mb'
}));
app.use(urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(helmet());
app.use(compression());
app.use(cookieparser());
app.use(rateLimit({
    max: 100000,
    windowMs: 1000 * 15 * 60
}));
app.use(cors({
    //http://localhost:3000/api/register
    origin: [
        'http://localhost:5173'
    ],
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ]
}));
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/rates", rateRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);
export default app;

//# sourceMappingURL=App.js.map