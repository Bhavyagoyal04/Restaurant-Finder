document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert(`Welcome, ${username}!`);
        window.location.href = "home.html";
    } else {
        alert("Please fill in both fields.");
    }
});

document.getElementById("googleLogin").addEventListener("click", () => {
    alert("Google login is currently under development.");
});

document.getElementById("facebookLogin").addEventListener("click", () => {
    alert("Facebook login is currently under development.");
});