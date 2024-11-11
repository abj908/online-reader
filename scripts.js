window.addEventListener('DOMContentLoaded', function() {
    "use strict";

    const inputField = document.querySelector('.inputbox');
    const displayButton = document.querySelector('.js-display-button');
    const textDisplay = document.querySelector('.text-display');

    function renderText() {
        const text = inputField.value;

        // Clear previous content
        textDisplay.textContent = '';

        if (text.trim() === '') {
            return;
        }

        // Set the textContent of the display element
        textDisplay.textContent = text;

        // No need to adjust font size manually; CSS handles it
    }

    displayButton.addEventListener('click', renderText, false);
});
