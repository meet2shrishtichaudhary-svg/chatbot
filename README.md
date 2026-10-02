 🤖 AI Chatbot

A simple and interactive AI chatbot powered by Google Gemini API, built with Python, FastAPI, HTML, CSS, and JavaScript.

📌 About The Project

AI Chatbot is a web-based conversational AI application created to explore the integration of modern AI services with a custom web application.

The project uses a JavaScript-based frontend to collect user messages, a FastAPI backend to handle API requests, and the Google Gemini API to generate intelligent responses.

The main goal of this project is to understand how a complete AI application works — from the user's message in the browser to the AI-generated response displayed back in the interface.


✨ Features

- 🤖 AI-powered conversations using Google Gemini
- 💬 Interactive chat interface
- ⚡ FastAPI-powered backend
- 🌐 HTML, CSS & JavaScript frontend
- 🔗 REST API communication between frontend and backend
- ⌨️ Send messages using the Send button or Enter key
- 🔐 Secure API-key management using environment variables
- 🚀 Lightweight local development setup
- 🧩 Simple and maintainable project structure


🏗️ Application Architecture

                 👤 User
                    │
                    ▼
          🌐 Frontend Interface
          HTML + CSS + JavaScript
                    │
                    │ POST /chat
                    ▼
             ⚡ FastAPI Backend
                    │
                    │ API Request
                    ▼
             🤖 Google Gemini
                    │
                    │ AI Response
                    ▼
             ⚡ FastAPI Backend
                    │
                    │ JSON Response
                    ▼
          🌐 Frontend Interface
                    │
                    ▼
               💬 AI Reply


🛠️ Tech Stack

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Python
- FastAPI
- Uvicorn

AI

- Google Gemini API
- Google GenAI Python SDK

Development & Security

- Python Virtual Environment
- Python-dotenv
- Git
- GitHub

---

📁 Project Structure

chatbot/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
└── README.md

---

⚙️ Getting Started

Follow the steps below to run the project locally.

1. Clone the Repository

git clone https://github.com/meet2shrishtichaudhary-svg/chatbot.git

Navigate to the project directory:

cd chatbot

---

2. Create a Virtual Environment

python -m venv venv

Activate the virtual environment on Windows:

venv\Scripts\activate



3. Install Dependencies

Install the required Python packages:

pip install fastapi uvicorn google-genai python-dotenv



🔑 Gemini API Configuration

This project requires a Google Gemini API key.

Create a file named:

backend/.env

Add your API key:

GEMINI_API_KEY=your_gemini_api_key_here

🔒 Security Notice

Never commit your ".env" file or expose your Gemini API key publicly.

The ".env" file is excluded through ".gitignore" to prevent accidentally pushing sensitive credentials to GitHub.



🚀 Running the Backend

From the project root, run:

python -m uvicorn backend.app:app --reload

The backend will be available at:

http://127.0.0.1:8000

You can verify that the backend is running by opening:

http://127.0.0.1:8000



🌐 Running the Frontend

Open a new terminal and run:

cd frontend

Start the local frontend server:

python -m http.server 5500

Then open the chatbot in your browser:

http://127.0.0.1:5500



💬 How To Use

1. Open the chatbot in your browser.
2. Type your question or message.
3. Click Send or press Enter.
4. The frontend sends the message to the FastAPI backend.
5. The backend sends the request to Google Gemini.
6. Gemini generates the response.
7. The response is displayed in the chatbot interface.

Example Questions

What is Python?

Explain artificial intelligence in simple words.

What is the difference between HTML and CSS?



🔐 Security

Security is an important part of this project.

The Gemini API key is stored in an environment variable rather than directly inside the source code.

backend/.env

The ".env" file should never be uploaded to GitHub.



📚 What I Learned

Building this project helped me understand:

- 🐍 Python backend development
- ⚡ FastAPI and API endpoints
- 🌐 Frontend development with HTML, CSS and JavaScript
- 🔗 Frontend-to-backend communication
- 🤖 Integrating an AI API
- 🔐 Managing API keys securely
- 🧪 Testing API requests
- 🐙 Git and GitHub version control
- 📦 Python virtual environments
- 🚀 Running local web applications



🔮 Future Improvements

The project can be extended with features such as:

- 🎙️ Voice input and voice responses
- 💾 Persistent chat history
- 🧠 Conversation memory
- 🌙 Dark / Light mode
- 📱 Improved mobile responsiveness
- ✨ Typing animation
- 🗑️ Clear conversation button
- 👤 User authentication
- ☁️ Cloud deployment
- 📊 Usage and conversation analytics



🔗 Repository

GitHub:
https://github.com/meet2shrishtichaudhary-svg/chatbot



👩‍💻 Author

Srishti Chaudhary

A learning-focused AI project exploring Artificial Intelligence, API integration, backend development, and web technologies.

Built with curiosity, code, and a passion for learning. 🚀



⭐ Support

If you find this project interesting or useful, consider giving the repository a ⭐ on GitHub.

Your support is appreciated! 

This project is created for learning and educational purposes
