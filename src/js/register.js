import { registerUser } from './auth.js';

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageBox = document.getElementById('messageBox');

    if (password !== confirmPassword) {
        messageBox.textContent = 'Passwords do not match!';
        messageBox.style.color = 'red';
        return;
    }

    try {
        await registerUser(email, password);
        messageBox.textContent = 'Registration successful! Redirecting to dashboard...';
        messageBox.style.color = 'green';
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Registration error:', error);
        messageBox.textContent = 'Error: ' + error.message;
        messageBox.style.color = 'red';
    }
});
