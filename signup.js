document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("newPassword").value;

    if (newUsername && email && newPassword) {
        alert(`Account created successfully for ${newUsername}! You can now log in.`);
        window.location.href = "login.html";
    } else {
        alert("Please fill in both fields to sign up.");
    }
});