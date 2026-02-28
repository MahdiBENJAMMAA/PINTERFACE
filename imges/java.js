const numInput = document.getElementById("numInput"); // ✅ matches input id
const errorMsg = document.getElementById("error-msg");

numInput.addEventListener("input", () => {
    if (numInput.value.length > 8) {
        errorMsg.textContent = "⚠ You can only enter up to 8 digits.";
        errorMsg.style.display = "block";
        numInput.value = numInput.value.slice(0, 8); // auto trim extra digits
    } else {
        errorMsg.style.display = "none"; // hide message if valid
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", () => {
        const email = document.getElementById("emailInput").value;
        const name = document.getElementById("nameInput").value;
        const number = document.getElementById("numInput").value;
        const date = document.getElementById("dateInput").value;

        // save in localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        localStorage.setItem("number", number);
        localStorage.setItem("date", date);

        // redirect to card page
        window.location.href = "card.html";
    });
});
