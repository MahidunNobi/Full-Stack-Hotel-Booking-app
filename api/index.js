import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRouter from "./Router/auth.js"
import hotelsRouter from "./Router/hotels.js"
import roomsRouter from "./Router/rooms.js"
import usersRouter from "./Router/user.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()
dotenv.config()


// Middlewares
app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("The API is ready to use...")
})

app.use("/api/auth", authRouter)
app.use("/api/hotels", hotelsRouter)
app.use("/api/rooms", roomsRouter)
app.use("/api/users", usersRouter)

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Something went wrong",
        status: err.status || 500,
        err
    })
})



const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
}

const port= 5000
app.listen(port, async()=>{
    await connect()
    console.log(`Server is running on port ${port}`);
})
