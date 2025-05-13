import express from "express";
import connectDB from "./config/db.js";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import lessonRoutes from "./routes/lessonRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running!");
});
app.use(express.json());

app.use("/api/lessons", lessonRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);
