function typing() {
    const text = 'I am Rez Lama';
    const typingElement = document.getElementById('typing-text')
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay)

}

function typeText(text, typingElement, typingDelay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i)
        }, typingDelay * i);
    }
}

document.addEventListener('DOMContentLoaded', typing)

const WORDS = ["Software Engineer", "Full Stack Developer", "Web Developer"];
const TYPING_SPEED = 100; // Milliseconds per character
const ERASING_SPEED = 50; // Milliseconds per character
const PAUSE_DURATION = 1000; // Pause before erasing (in ms)

function typewriterEffect(elementId) {
    const element = document.getElementById('typing'); // Use the dynamic elementId
    let wordIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function updateText() {
        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                element.textContent += WORDS[wordIndex][charIndex];
                charIndex++;
                setTimeout(updateText, TYPING_SPEED);
            } else {
                setTimeout(() => {
                    // After typing a word, pause before erasing
                    setTimeout(() => {
                        // Start erasing after the pause
                        isTyping = false;
                        updateText();
                    }, PAUSE_DURATION);
                }, PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                element.textContent = element.textContent.slice(0, -1); // Erase one character
                charIndex--;
                setTimeout(updateText, ERASING_SPEED);
            } else {
                // After erasing, clear the block and go to the next word
                element.textContent = ""; // Clear the block
                wordIndex = (wordIndex + 1) % WORDS.length;
                isTyping = true; // Start typing again
                setTimeout(updateText, PAUSE_DURATION); // Pause before typing the next word
            }
        }
    }

    updateText();
}

document.addEventListener("DOMContentLoaded", () => {
    typewriterEffect("typewriter"); // Make sure you have an element with id="typewriter"
});


