// Function to open the Sign-Up Modal
function openSignupModal() {
    document.getElementById("signupModal").style.display = "flex";
}

// Function to close the Sign-Up Modal
function closeSignupModal() {
    document.getElementById("signupModal").style.display = "none";
}

// Handle Login Form submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Retrieve saved credentials from localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    // Basic credential check
    if (username === savedUsername && password === savedPassword) {
        // Store the current user's name in localStorage for the dashboard
        localStorage.setItem("currentUser", username);

        // Redirect to the user dashboard after a short delay
        setTimeout(() => {
            window.location.href = "user-dashboard.html"; // Make sure this URL is correct
        }, 1000); // 1-second delay
    } else {
        alert("Incorrect username or password!");
    }
});

// Handle Sign-Up Form submission
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Save the new user's data
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    alert("Account created successfully!");
    closeSignupModal(); // Close modal after signup
});
