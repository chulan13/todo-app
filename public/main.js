document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.classList.add(`${currentTheme}-theme`);

    toggleButton.addEventListener('click', () => {
        let newTheme = 'light';
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.replace('light-theme', 'dark-theme');
            newTheme = 'dark';
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
        }
        localStorage.setItem('theme', newTheme);
    });
});


// For the container movement
const container = document.querySelector(".container");
function onMouseDrag({ movementX, movementY }) {
    let getContainerStyle = window.getComputedStyle(container);
    let leftValue = parseInt(getContainerStyle.left);
    let topValue = parseInt(getContainerStyle.top);
    container.style.left = `${leftValue + movementX}px`;
    container.style.top = `${topValue + movementY}px`;
}
container.addEventListener("mousedown", () => {
    container.addEventListener("mousemove", onMouseDrag);
});
document.addEventListener("mouseup", () => {
    container.removeEventListener("mousemove", onMouseDrag);
});


// Changing general page color themes
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.classList.add(`${currentTheme}-theme`);

    toggleButton.addEventListener('click', () => {
        let newTheme = 'light';
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.replace('light-theme', 'dark-theme');
            newTheme = 'dark';
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
        }
        localStorage.setItem('theme', newTheme);
    });

    // Load saved text style
    const savedTextStyle = localStorage.getItem('textStyle');
    if (savedTextStyle) {
        document.body.classList.add(savedTextStyle);
        document.getElementById('text-style-select').value = savedTextStyle;
    }
});

// public/main.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    const textStyleSelect = document.getElementById('text-style-select');

    // Apply saved theme
    document.body.classList.add(`${currentTheme}-theme`);

    // Apply saved text style
    const savedTextStyle = localStorage.getItem('textStyle');
    if (savedTextStyle) {
        document.body.classList.add(savedTextStyle);
        textStyleSelect.value = savedTextStyle;
    }

    // Toggle theme
    toggleButton.addEventListener('click', () => {
        let newTheme = 'light';
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.replace('light-theme', 'dark-theme');
            newTheme = 'dark';
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
        }
        localStorage.setItem('theme', newTheme);
    });

    // Handle text style change
    textStyleSelect.addEventListener('change', function() {
        document.body.className = document.body.className.replace(/text-style-\w+/g, '');
        document.body.classList.add(this.value);
        localStorage.setItem('textStyle', this.value);
    });
});
