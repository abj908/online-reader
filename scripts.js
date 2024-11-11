// scripts.js

window.addEventListener('DOMContentLoaded', function() {
    "use strict";

    const inputField = document.querySelector('.inputbox');
    const displayButton = document.querySelector('.js-display-button');
    const textDisplay = document.querySelector('.text-display');
    const darkModeButton = document.querySelector('.js-toggle-dark-mode');

    function renderText() {
        const text = inputField.value;

        // Clear previous content
        textDisplay.innerHTML = '';

        if (text.trim() === '') {
            return;
        }

        // Process the text to handle footnotes and formatting
        const processedText = processText(text);

        // Set the innerHTML of the display element
        textDisplay.innerHTML = processedText;
    }

    function processText(text) {
        // Escape HTML characters to prevent XSS
        const escapedText = escapeHTML(text);

        // Process footnotes and footnote links
        let processedText = escapedText;

        // Replace footnote markers [number]
        processedText = processedText.replace(/\[<a name="(f\d+n)">(\d+)<\/a>\]/g, function(match, p1, p2) {
            return '<span class="footnote">[<a name="' + p1 + '">' + p2 + '</a>]</span>';
        });

        // Replace footnote links
        processedText = processedText.replace(/<a href="#(f\d+n)">/g, function(match, p1) {
            return '<a href="#' + p1 + '" class="footnote-link">';
        });

        // Replace color tags
        processedText = processedText.replace(/<font color="([^"]+)">/g, function(match, p1) {
            return '<span style="color:' + p1 + '">';
        }).replace(/<\/font>/g, '</span>');

        // Replace underline tags
        processedText = processedText.replace(/<u>/g, '<span style="text-decoration: underline;">')
                                     .replace(/<\/u>/g, '</span>');

        // Replace line breaks with <br> tags
        processedText = processedText.replace(/\n/g, '<br>');

        return processedText;
    }

    function escapeHTML(str) {
        return str.replace(/[&<>"]/g, function(match) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;'
            })[match];
        });
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    // Event listeners
    displayButton.addEventListener('click', renderText, false);
    darkModeButton.addEventListener('click', toggleDarkMode, false);
});
