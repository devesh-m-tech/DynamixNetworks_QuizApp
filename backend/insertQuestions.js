import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();

const questionList = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Marking Language",
      "Hyperlink Text Making Language",
      "Hyper Transfer Media Language",
    ],
    answer: 0,
    category: "webdev",
    difficulty: "easy",
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["Laravel", "React", "Django", "Flask"],
    answer: 1,
    category: "webdev",
    difficulty: "easy",
  },
  {
    question: "CSS stands for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style Sheets",
    ],
    answer: 1,
    category: "webdev",
    difficulty: "easy",
  },
  {
    question: "Which tag is used to write JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: 2,
    category: "webdev",
    difficulty: "easy",
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2,
    category: "webdev",
    difficulty: "easy",
  },

  // Medium
  {
    question: "Which array method adds an element at the end in JS?",
    options: ["push()", "append()", "addLast()", "insert()"],
    answer: 0,
    category: "webdev",
    difficulty: "medium",
  },
  {
    question: "Which hook is used for state management in React?",
    options: ["useState()", "useData()", "useStore()", "stateHook()"],
    answer: 0,
    category: "webdev",
    difficulty: "medium",
  },
  {
    question: "Which HTTP method updates data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: 2,
    category: "webdev",
    difficulty: "medium",
  },
  {
    question: "Which CSS property makes text bold?",
    options: ["font-weight", "font-bold", "font-thick", "text-bold"],
    answer: 0,
    category: "webdev",
    difficulty: "medium",
  },
  {
    question: "Which display type is default for <div>?",
    options: ["inline", "flex", "block", "grid"],
    answer: 2,
    category: "webdev",
    difficulty: "medium",
  },

  // Hard
  {
    question: "React uses which type of DOM?",
    options: ["Virtual DOM", "Real DOM", "Deep DOM", "Shadow DOM"],
    answer: 0,
    category: "webdev",
    difficulty: "hard",
  },
  {
    question: "Closures in JavaScript allow?",
    options: ["Nested functions", "File access", "Debugging", "None"],
    answer: 0,
    category: "webdev",
    difficulty: "hard",
  },
  {
    question: "Node.js runs on which engine?",
    options: ["V8", "Chakra", "Nitro", "SpiderMonkey"],
    answer: 0,
    category: "webdev",
    difficulty: "hard",
  },
  {
    question: "Which is used for responsive CSS?",
    options: ["media queries", "selectors", "filters", "outline"],
    answer: 0,
    category: "webdev",
    difficulty: "hard",
  },
  {
    question: "Which hook is used for side effects?",
    options: ["useEffect()", "useCallback()", "useMemo()", "useSide()"],
    answer: 0,
    category: "webdev",
    difficulty: "hard",
  },

  // GK easy
  {
    question: "Which planet is called the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: 1,
    category: "general",
    difficulty: "easy",
  },
  {
    question: "National animal of India?",
    options: ["Peacock", "Tiger", "Lion", "Elephant"],
    answer: 1,
    category: "general",
    difficulty: "easy",
  },
  {
    question: "Which gas do plants release?",
    options: ["Nitrogen", "Oxygen", "Hydrogen", "CO2"],
    answer: 1,
    category: "general",
    difficulty: "easy",
  },
  {
    question: "Fastest land animal?",
    options: ["Tiger", "Cheetah", "Horse", "Leopard"],
    answer: 1,
    category: "general",
    difficulty: "easy",
  },
  {
    question: "Largest ocean?",
    options: ["Indian", "Pacific", "Atlantic", "Arctic"],
    answer: 1,
    category: "general",
    difficulty: "easy",
  },

  // GK medium
  {
    question: "Who wrote Hamlet?",
    options: ["Shakespeare", "Milton", "Keats", "Wordsworth"],
    answer: 0,
    category: "general",
    difficulty: "medium",
  },
  {
    question: "Light travels fastest in?",
    options: ["Water", "Glass", "Air", "Vacuum"],
    answer: 3,
    category: "general",
    difficulty: "medium",
  },
  {
    question: "Currency of Japan?",
    options: ["Won", "Dollar", "Rupee", "Yen"],
    answer: 3,
    category: "general",
    difficulty: "medium",
  },
  {
    question: "First president of India?",
    options: ["Nehru", "Rajendra Prasad", "Gandhi", "Ambedkar"],
    answer: 1,
    category: "general",
    difficulty: "medium",
  },
  {
    question: "World War II ended in?",
    options: ["1940", "1942", "1945", "1950"],
    answer: 2,
    category: "general",
    difficulty: "medium",
  },
];

const insert = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Question.deleteMany();
    await Question.insertMany(questionList);
    console.log("50 questions added successfully");
    process.exit();
  } catch (err) {
    console.log("Failed:", err.message);
    process.exit(1);
  }
};

insert();
