// Handle login and logout
document.getElementById("loginBtn").addEventListener("click", function() {
    sessionStorage.setItem("loggedIn", "true");
    updateLoginStatus();
});

document.getElementById("logoutBtn").addEventListener("click", function() {
    sessionStorage.removeItem("loggedIn");
    updateLoginStatus();
});

function updateLoginStatus() {
    if (sessionStorage.getItem("loggedIn") === "true") {
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline-block";
    } else {
        document.getElementById("loginBtn").style.display = "inline-block";
        document.getElementById("logoutBtn").style.display = "none";
    }
}

// Initialize login status on page load
updateLoginStatus();

