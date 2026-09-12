const history = new Set();

function appendMessage(text, sender) {
    const chat = document.getElementById('chat-container');
    const msg = document.createElement('div');
    msg.className = `message ${sender}`;
    msg.innerText = text;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.trim().toLowerCase();
    
    if (!text) return;
    
    appendMessage(input.value, 'user');
    input.value = '';
    
    setTimeout(() => {
        if (history.has(text)) {
            appendMessage("It's you again, looser", 'bot');
        } else {
            history.add(text);
            appendMessage("I don't care", 'bot');
        }
    }, 500);
}

// Allow sending message by pressing Enter key
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
