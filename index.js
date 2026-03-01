const timeDisplay = document.getElementById('current-time-display');

function updateTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    timeDisplay.textContent = now.toLocaleTimeString('en-GB', options);
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// Add smooth scroll behavior for potential horizontal scrolling on small screens
document.addEventListener('DOMContentLoaded', () => {
    const mainFrame = document.querySelector('.main-frame');
    if (mainFrame) {
        mainFrame.style.opacity = '0';
        requestAnimationFrame(() => {
            mainFrame.style.transition = 'opacity 1.5s ease-out';
            mainFrame.style.opacity = '1';
        });
    }
});
