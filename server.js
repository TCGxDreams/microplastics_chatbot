require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:5502'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Lấy API key từ biến môi trường
const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

app.post('/generate', async (req, res) => {
  try {
    const { message, chatHistory } = req.body;
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", 
      systemInstruction: "Bạn tên là Khôi, bạn là một giáo sư chuyên về sinh học nghiên cứu về vi nhựa"
    });

    const prompt = chatHistory.map(entry => `${entry.role === 'user' ? 'User' : 'Bot'}: ${entry.content}`).join('\n') + `\nUser: ${message}\nBot:`;

    const result = await model.generateContent(prompt);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
