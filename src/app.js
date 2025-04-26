import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {errorHandlerMiddleware} from "./middlewares/error.middleware.js"
import authRoutes from "./routes/auth.routes.js"

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(errorHandlerMiddleware);

export default app;

