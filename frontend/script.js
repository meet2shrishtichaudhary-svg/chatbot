const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

async function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // Show user's message
    addMessage(message, "user");

    // Clear input
    userInput.value = "";

    // Show temporary message
    const loadingMessage = addMessage("Thinking... 🤔", "bot");

    try {
        const response = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        // Remove "Thinking..."
        loadingMessage.remove();

        if (response.ok) {
            addMessage(data.reply, "bot");
        } else {
            addMessage("Sorry, something went wrong. ❌", "bot");
        }

    } catch (error) {
        loadingMessage.remove();
        addMessage(
            "Backend se connection nahi ho pa raha. Check karo ki Uvicorn running hai.",
            "bot"
        );

        console.error(error);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    return messageDiv;
}

// Send button
sendBtn.addEventListener("click", sendMessage);

// Press Enter to send
userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});