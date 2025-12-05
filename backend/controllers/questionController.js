import Question from "../models/Question.js";

export const getQuestions = async (req, res) => {
  const { category, difficulty } = req.query;

  const match = {};
  if (category) match.category = category;
  if (difficulty) match.difficulty = difficulty;

  try {
    const pipeline = [];

    if (Object.keys(match).length > 0) {
      pipeline.push({ $match: match });
    }

    pipeline.push({ $sample: { size: 5 } });

    const questions = await Question.aggregate(pipeline);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching questions" });
  }
};
