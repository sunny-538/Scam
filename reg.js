function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('errorMessage');

    // Basic validation
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        errorMessage.textContent = 'All fields are required';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return false;
    }

    // Additional validation (e.g., email format)

    // Clear error message if all validations pass
    errorMessage.textContent = '';
    return true;
}
