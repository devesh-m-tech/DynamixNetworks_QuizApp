import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import questionRoutes from "./routes/questionRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/questions", questionRoutes);
app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => {
  res.send("Quiz backend is running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
