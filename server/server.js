import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import lessonRoutes from "./routes/lessons.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/lessons", lessonRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error("MongoDB error:", err));
