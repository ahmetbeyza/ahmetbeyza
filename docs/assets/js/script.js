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

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
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
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

  

const text = "EVLENİYORUZ";
const typingText = document.getElementById('typing-text');
const backButton = document.getElementById('prev1');

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

backButton.addEventListener('click', function() {
    typingText.textContent = '';
    
    typeText();
});


// Counter Code
// -------------------------------------------------
var countDownDate = new Date("Oct 28, 2023 19:00:00").getTime();

var date = new Date();

var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days 
document.getElementById("hour").innerHTML = hours 
document.getElementById("min").innerHTML = minutes
document.getElementById("sec").innerHTML = seconds

if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("day").innerHTML = "Are"
    document.getElementById("hour").innerHTML = "You" 
    document.getElementById("min").innerHTML = "Ready"
    document.getElementById("sec").innerHTML = "To Wed?"
  }
}, 1000);