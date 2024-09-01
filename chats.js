// Function to handle the loading screen
function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide the loading screen after 3 seconds
    setTimeout(() => {
        loadingScreen.style.transition = 'opacity 1s ease'; // Add transition for smooth fading
        loadingScreen.style.opacity = 0;
        
        // Remove the loading screen from the DOM after fading out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); // Matches the duration of the opacity transition
    }, 3000); // Display the loading screen for 3 seconds
}

// Function to append messages to the chat log
function appendMessage(content, className) {
    const chatLog = document.getElementById('chat-log');
    const message = document.createElement('div');
    message.className = className;
    message.textContent = content;
    chatLog.appendChild(message);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
}

// Function to send the user's message
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        appendMessage(message, 'user-message');
        userInput.value = '';

        // Simulate bot response (Replace this with an actual API call)
        setTimeout(() => {
            const botResponse = "Hlo user I am here to solve your problem just feel free to ask....";
            appendMessage(botResponse, 'bot-message');
        }, 500);
    }
}

// Allow pressing Enter to send the message
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Initialize the loading screen
window.onload = handleLoadingScreen;
