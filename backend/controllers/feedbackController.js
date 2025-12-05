import Feedback from "../models/Feedback.js";

export const submitFeedback = async (req, res) => {
  try {
    const { name, score, total, feedback } = req.body;

    if (!name || !feedback || typeof score !== "number" || typeof total !== "number") {
      return res.status(400).json({ message: "Invalid data" });
    }

    await Feedback.create({
      name,
      score,
      total,
      feedback,
    });

    res.status(200).json({ message: "Feedback saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving feedback" });
  }
};
