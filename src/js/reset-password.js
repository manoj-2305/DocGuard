import { resetPassword } from './auth.js';

document.getElementById('resetForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
        await resetPassword(email);
        alert('Password reset email sent! Check your inbox.');
        window.location.href = '../index.html';
    } catch (error) {
        console.error('Reset error:', error);
        alert('Error: ' + error.message);
    }
});