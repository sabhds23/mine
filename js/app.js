// Show the login modal when "Personal Cabinet" button is clicked
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'flex';
});

// Close the modal when the close button (x) is clicked
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

// Close the modal if clicked outside the modal content
window.onclick = function(event) {
    if (event.target === document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
};

// Handle form submission and validate login details
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the values from the form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define the correct login credentials
    const correctUsername = 'Arevik2024';
    const correctPassword = 'ArturArev2020';

    // Check if the entered username and password are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to profile page on successful login
        window.location.href = 'profile.html';  // Redirect to profile.html
    } else {
        alert('Invalid login or password. Please try again.');
    }
});
