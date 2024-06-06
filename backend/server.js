import express from "express";
import connectDB from "./config/connectDB.js";
import colors from "colors";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler.js";
import offerRouter from "./routes/offerRouter.js";
import courseRouter from "./routes/courseRouter.js";
import reviewRouter from "./routes/reviewRouter.js";
import eventRouter from "./routes/eventRouter.js";
import contactRouter from "./routes/contactRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
import userRouter from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
import offer from "mongoose";

const app = express();
const { PORT } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

await connectDB();


app.use("/user", userRouter);
app.use("/offer", offerRouter);
app.use("/course", courseRouter);
app.use("/event", eventRouter);
app.use("/contact", contactRouter);
app.use("/booking", bookingRouter);
app.use("/review", reviewRouter);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(
    `:::`.green.bold,
    `Server running on port`.yellow.bold,
    `http://localhost:${PORT}`.green.underline.bold
  )
);
