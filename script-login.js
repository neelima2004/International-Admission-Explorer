document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "profile.html"; 
    } else {
        alert("Invalid email or password.");
    }
});
