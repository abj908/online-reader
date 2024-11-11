// scripts.js

window.addEventListener('DOMContentLoaded', function() {
    "use strict";

    const inputField = document.querySelector('.inputbox');
    const displayButton = document.querySelector('.js-display-button');
    const textDisplay = document.querySelector('.text-display');
    const darkModeButton = document.querySelector('.js-toggle-dark-mode'); // Added

    function renderText() {
        const text = inputField.value;

        // Clear previous content
        textDisplay.textContent = '';

        if (text.trim() === '') {
            return;
        }

        // Set the textContent of the display element
        textDisplay.textContent = text;
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    displayButton.addEventListener('click', renderText, false);
    darkModeButton.addEventListener('click', toggleDarkMode, false); // Added
});
