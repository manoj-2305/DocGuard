import { auth } from '/src/firebase/firebase-config.js';

export const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

export const registerUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

export const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
};