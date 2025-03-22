import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv";
import cookiesParser from "cookie-parser"
import {connectDB} from "./lib/db.js"

const app=express();

dotenv.config();


app.use(express.json());
app.use(cookiesParser());
const PORT=process.env.PORT;

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    connectDB();
});



