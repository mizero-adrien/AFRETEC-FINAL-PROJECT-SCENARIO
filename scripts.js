document.addEventListener("DOMContentLoaded", function () {
    const eventCards = document.querySelectorAll(".event-card");
    const body = document.body;

    eventCards.forEach((card) => {
        card.addEventListener("click", function () {
            // Close any already open cards
            document.querySelectorAll(".event-card.active").forEach(activeCard => {
                activeCard.classList.remove("active");
            });

            // Show overlay
            let overlay = document.createElement("div");
            overlay.classList.add("overlay");
            body.appendChild(overlay);
            overlay.style.display = "block";

            // Expand the clicked card
            this.classList.add("active");

            // Close on clicking overlay
            overlay.addEventListener("click", function () {
                card.classList.remove("active");
                overlay.remove();
            });
        });
    });
});

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}
function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}
window.onclick = function(event) {
    var modal = document.getElementById('signupModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function subscribeNewsletter() {
    var email = document.getElementById('newsletterEmail').value;
    if(email) {
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email.');
    }
}
let index = 0;
function showSlides() {
    let slides = document.getElementsByClassName("event-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) { index = 1; }
    slides[index - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});