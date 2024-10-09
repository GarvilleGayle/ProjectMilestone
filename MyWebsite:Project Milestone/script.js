document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        displayMessage("Please fill out all fields.", "error");
    } else if (!isValidEmail(email)) {
        displayMessage("Please enter a valid email address.", "error");
    } else {
        displayMessage("Thank you for your message!", "success");
        this.reset(); // Resets the form
    }
});

function displayMessage(msg, type) {
    const formMessage = document.getElementById("formMessage");
    formMessage.textContent = msg;
    formMessage.style.color = type === "success" ? "green" : "red";
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}