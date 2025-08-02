import { loginUser } from './auth.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageBox = document.getElementById('messageBox');

    try {
        await loginUser(email, password);
        messageBox.textContent = 'Login successful!';
        messageBox.style.color = 'green';
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Login error:', error);
        messageBox.textContent = 'Error: ' + error.message;
        messageBox.style.color = 'red';
    }
});
