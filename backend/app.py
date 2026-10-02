from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv("backend/.env")

# Get Gemini API key
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in backend/.env")

# Create Gemini client
client = genai.Client(api_key=api_key)

# Create FastAPI app
app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


SYSTEM_PROMPT = """
You are my personal AI assistant.

Your job is to answer clearly and helpfully.

Rules:
- Use simple language.
- Give accurate answers.
- Be friendly and concise.
"""


@app.get("/")
def home():
    return {
        "message": "AI Chatbot Backend is running!"
    }


@app.post("/chat")
def chat(request: ChatRequest):

    try:
        prompt = f"""
{SYSTEM_PROMPT}

User message:
{request.message}
"""

        response = client.models.generate_content(
            model="gemini-3.5-flash",
            contents=prompt
        )

        return {
            "reply": response.text
        }

    except Exception as e:
        print("GEMINI ERROR:", repr(e))

        return {
            "reply": f"Error: {str(e)}"
        }