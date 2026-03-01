const chatMessages = document.getElementById('chat-messages');
const typingIndicator = document.getElementById('typing-indicator');
const timeOverlay = document.getElementById('current-time-display');

// Use the actual system time
let currentTimeValue = new Date();

function updateTime() {
    currentTimeValue.setSeconds(currentTimeValue.getSeconds() + 1);
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeOverlay.textContent = currentTimeValue.toLocaleTimeString([], options);
}

setInterval(updateTime, 1000);
updateTime();

async function showTyping(duration = 1500) {
    typingIndicator.style.display = 'flex';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    await new Promise(resolve => setTimeout(resolve, duration));
    typingIndicator.style.display = 'none';
}

function addMessage(text, sender = 'bot') {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);

    const timeSpan = document.createElement('span');
    timeSpan.classList.add('time');
    const options = { hour: '2-digit', minute: '2-digit' };
    timeSpan.textContent = currentTimeValue.toLocaleTimeString([], options);

    msgDiv.textContent = text;
    msgDiv.appendChild(timeSpan);

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleBotResponse(responseType) {
    await showTyping();

    if (responseType === 'greet') {
        addMessage("Hi! I'm Wu Yiting. Welcome to my personal page!");
    } else if (responseType === 'Tell me more') {
        addMessage("I'm a designer and developer focused on creating interactive, human-centered digital experiences. I love combining code with aesthetics.");
    } else if (responseType === 'What is the time?') {
        const timeStr = currentTimeValue.toLocaleTimeString();
        addMessage(`Right now, it's ${timeStr}. Time is the most valuable currency, isn't it?`);
    } else if (responseType === 'Contact Info') {
        addMessage("You can find me on LinkedIn, GitHub, or reach out via email. Let's create something great together!");
    }
}

// Initial Greeting
window.onload = () => {
    setTimeout(async () => {
        await handleBotResponse('greet');
    }, 500);
};

// Handle Button Clicks
document.querySelectorAll('.chip').forEach(button => {
    button.addEventListener('click', async (e) => {
        const response = e.target.getAttribute('data-response');

        // Add User Message
        addMessage(response, 'user');

        // Bot Responses Based on input
        await handleBotResponse(response);
    });
});
