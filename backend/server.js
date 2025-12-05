import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import questionRoutes from "./routes/questionRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

// connect to MongoDB
connectDB();

const app = express();

// allowed client url
const allowedSites = [
  "https://quiz-app-dnx.netlify.app"
];

// cors setup
app.use(
  cors({
    origin: function (origin, cb) {
      if (!origin || allowedSites.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error("Blocked by CORS"));
      }
    }
  })
);

app.use(express.json());

// routes
app.use("/api/questions", questionRoutes);
app.use("/api/feedback", feedbackRoutes);

// basic route
app.get("/", (req, res) => {
  res.send("Quiz backend running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
