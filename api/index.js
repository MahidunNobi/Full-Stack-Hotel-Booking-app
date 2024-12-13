import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./Router/auth.js";
import hotelsRouter from "./Router/hotels.js";
import roomsRouter from "./Router/rooms.js";
import usersRouter from "./Router/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cookieSession from "cookie-session";
import { connect } from "./utils/connectDB.js";

const app = express();
dotenv.config();

// Middlewares
app.use(
  cors({
    origin: [
      "https://profound-yeot-a5eb43.netlify.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(
  cookieSession({
    name: "__session",
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 100,
    secure: true,
    httpOnly: true,
    sameSite: "none",
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The API is ready to use...");
});

app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong",
    status: err.status || 500,
    err,
  });
});

const port = 5000;
app.listen(port, async () => {
  await connect();
  console.log(`Server is running on port ${port}`);
});
