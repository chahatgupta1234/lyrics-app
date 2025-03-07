# Lyric Match - AI-Powered Song Guessing Game

## 🎵 Overview
Lyric Match is a web application where users guess the song title based on a short AI-generated lyric snippet. The application utilizes **React.js** for the frontend, **Node.js (Express.js)** for the backend, and **Google's Gemini AI** for lyric generation.

## ✨ Features
- **Generate Lyric Snippet**: Click a button to get a random snippet from an English song.
- **Enter Guess**: Users type their guess for the song title.
- **Check Answer**: The app validates the user's guess and provides feedback.
- **AI-Powered Lyrics**: Uses **Google's Gemini AI** to generate lyrics without revealing the song title.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (comes with Node.js) or yarn
- An API key for **Google Gemini AI** (Get it from [Google AI Studio](https://aistudio.google.com/))

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/lyric-match.git
cd lyric-match
```

---

## 🖥️ Frontend Setup (React.js)

### Install Dependencies
```sh
cd lyric-match-frontend
npm install
```

### Start the Frontend
```sh
npm start
```
The frontend will run on `http://localhost:3000/` by default.

---

## ⚙️ Backend Setup (Node.js + Express.js)

### Install Dependencies
```sh
cd lyric-match-backend
npm install
```

### Set Up Environment Variables
Create a `.env` file in `lyric-match-backend/` and add your **Google Gemini API Key**:
```sh
GEMINI_API_KEY=your-google-gemini-api-key
```

### Add a Song List
Ensure you have a `songs.json` file in `lyric-match-backend/` with at least 20 song titles:
```json
{
  "songs": [
    "Shape of You",
    "Bohemian Rhapsody",
    "Someone Like You",
    "Hotel California",
    "Rolling in the Deep",
    "Let It Be",
    "Halo",
    "Blinding Lights",
    "Smells Like Teen Spirit",
    "Uptown Funk"
  ]
}
```

### Start the Backend
```sh
npm start
```
The backend will run on `http://localhost:5000/`.

---

## 🔗 API Endpoints

### 1️⃣ Generate a Lyric Snippet
**Endpoint:** `GET /generate-lyric`
- Returns a randomly generated lyric snippet and the correct song title.

**Example Response:**
```json
{
  "lyric": "Take me into your loving arms, kiss me under the light of a thousand stars.",
  "song": "Thinking Out Loud"
}
```

### 2️⃣ Check Answer
**Endpoint:** `POST /check-answer`
- Receives the user's guess and compares it with the correct song title.

**Request Body:**
```json
{
  "guess": "Thinking Out Loud",
  "song": "Thinking Out Loud"
}
```

**Example Response:**
```json
{
  "result": "Correct!"
}
```

---

## 🎨 Technologies Used
- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, dotenv, CORS
- **AI Model:** Google Gemini API

---

## 🔥 Future Enhancements
- Implement a leaderboard for tracking user scores.
- Add difficulty levels with different lyric lengths.
- Integrate a database for song storage instead of a JSON file.

---

## 🤝 Contributing
Pull requests are welcome! Feel free to fork the repo and submit improvements.

---

## 📜 License
This project is open-source under the [MIT License](LICENSE).

---

## 📧 Contact
For any questions, reach out to **[Your Name]** at **your.email@example.com**.

