document.addEventListener('DOMContentLoaded', function () {
    const text = "Evleniyoruz";
    const typingText = document.getElementById('typing-text');

    function typeText() {
        let index = 0;

        function typeCharacter() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(typeCharacter, 250);
            }
        }

        typeCharacter();
    }

    typeText();
});
