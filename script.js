document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() === "") return;
    appendMessage("me", userMessage);
    // Simulate AI response
    setTimeout(function() {
        var aiResponse = generateAIResponse(userMessage);
        appendMessage("ai", aiResponse);
    }, 1000);
    document.getElementById("user-message").value = "";
});

function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    var messageText = document.createElement("ai");
    messageText.classList.add("message-text");
    messageText.textContent = message;
    messageElement.appendChild(messageText);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(userMessage) {
    // Here you can implement your AI logic to generate responses
    // For simplicity, let's just echo back the user's message
    return "Hmm";

}
