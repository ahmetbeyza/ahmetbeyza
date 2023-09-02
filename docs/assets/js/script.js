document.addEventListener('DOMContentLoaded', function () {
    const text = "EVLENİYORUZ";
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

function makeInvitation() {

    const guestName = document.getElementById("guestName").value.toUpperCase();
    
    document.getElementById("closeRow").style.marginTop = "0vh";
    document.getElementById("closeDiv").style.display = "none";
    document.getElementById("invDiv").style.display = "initial";



    document.getElementById("who").innerText = "Sevgili \n" + guestName;


    if (document.getElementById("fam").checked) {
        document.getElementById("with").innerText = "ve ailesi";
    }

}

document.getElementById("myButton").addEventListener("click",
    makeInvitation
);