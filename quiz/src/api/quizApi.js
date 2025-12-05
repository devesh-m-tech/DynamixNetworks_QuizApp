const BASE_URL = "https://quiz-backend-k2tf.onrender.com";

export const fetchQuestions = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/questions`);
    return await res.json();
  } catch (err) {
    console.log("Error loading questions:", err);
    return [];
  }
};

export const sendFeedback = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return await res.json();
  } catch (err) {
    console.log("Error sending feedback:", err);
    return null;
  }
};
