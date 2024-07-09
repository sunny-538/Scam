document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Basic validation (can be expanded as needed)
    if (username === '' || password === '') {
        errorMessage.textContent = "Please fill out both fields.";
        return;
    }
    
    errorMessage.textContent = "";
    alert('Login successful!\n' + 'Username: ' + username);
    
    // You can add your form submission logic here (e.g., send data to a server)
});