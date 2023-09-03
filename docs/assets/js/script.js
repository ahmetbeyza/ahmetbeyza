function makeInvitation() {

    const guestName = document.getElementById("guestName").value.toUpperCase();
    
    document.getElementById("closeRow").style.marginTop = "0vh";

    document.getElementById("with").innerText = "";

    if (document.getElementById("fam").checked) {
        document.getElementById("with").innerText = "ve ailesi,";
    }


    document.getElementById("invDiv").style.display = "initial";

    document.getElementById("who").innerText = "Sevgili \n" + guestName;

    
    showSlides(slideIndex += 1);

}

/*slide*/

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "initial";
    dots[slideIndex-1].className += " active";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  

const text = "EVLENİYORUZ"; // The text you want to type
const typingText = document.getElementById('typing-text');
const backButton = document.getElementById('prev1');

function typeText() {
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeCharacter, 250); // Adjust typing speed (milliseconds per character)
        }
    }

    typeCharacter();
}

// Start the typing effect when the page loads
typeText();

// Event listener for the back button
backButton.addEventListener('click', function() {
    // Clear the existing text
    typingText.textContent = '';
    
    // Start the typing effect again
    typeText();
});