require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");

//check api key
console.log("GEMINI_API_KEY", process.env.GEMINI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Load songs from JSON
const songs = JSON.parse(fs.readFileSync("songs.json", "utf8")).songs;

// Endpoint to generate a lyric snippet
app.get("/generate-lyric", async (req, res) => {
  try {
    console.log("Generating lyric snippet...");
    const randomSong = songs[Math.floor(Math.random() * songs.length)];

    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
    const headers = { "Content-Type": "application/json" };
    const payload = {
      contents: [{ parts: [{ text: `Generate 2-4 lines of lyrics from ${randomSong} song that Do NOT include ${randomSong} word in the lyrics that you generate.` }] }]
    };

    const response = await axios.post(`${url}?key=${GEMINI_API_KEY}`, payload, { headers });

    // Extract generated lyrics from response
    const lyric = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Failed to generate lyrics.";

    res.json({ lyric, song: randomSong });
  } catch (error) {
    console.error("Error generating lyrics:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate lyrics" });
  }
});



// Endpoint to check the user's guess
app.post("/check-answer", (req, res) => {
  const { guess, song } = req.body;
  console.log("Received:", req.body); // Debugging

  if (!guess || !song) {
    console.error("Missing guess or song:", { guess, song });
    return res.status(400).json({ error: "Missing guess or song title" });
  }

  const normalizedGuess = guess.toLowerCase().trim();
  const normalizedSong = song.toLowerCase().trim();

  const isCorrect = normalizedGuess === normalizedSong;
  res.json({ result: isCorrect ? "Correct!" : `Incorrect! The song was "${song}"` });
});


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
