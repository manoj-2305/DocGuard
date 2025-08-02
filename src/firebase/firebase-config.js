// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdpYiE2b5A6_Pm2k8UCWNLhznH3knQzAc",
    authDomain: "docguard-9913c.firebaseapp.com",
    projectId: "docguard-9913c",
    storageBucket: "docguard-9913c.firebasestorage.app",
    messagingSenderId: "8989263658",
    appId: "1:8989263658:web:f0ba6f56c91947224e4053",
    measurementId: "G-4XNMKG26QR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore(); // Assuming Firestore is used, if not, use Realtime Database