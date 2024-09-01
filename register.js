// Mock registered users
let users = JSON.parse(localStorage.getItem('users')) || {};

// Handle registration
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Check if the username already exists
    if (users[username]) {
        document.getElementById('register-message').innerText = "Username already exists.";
    } else {
        // Register the new user
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('register-message').style.color = "green";
        document.getElementById('register-message').innerText = "Registration successful!";
    }
});
