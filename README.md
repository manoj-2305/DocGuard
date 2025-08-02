# DocGuard - Cybersecurity Firewall Software

This repository contains the frontend and backend for DocGuard, a cybersecurity firewall software. The website is designed to be modern, secure, and visually impressive, focusing on a dark mode theme with neon effects and tech-style visuals.

## Project Structure

```
/docguard
├── index.html                  # Main entry point (Login Page)
├── /pages/
│   ├── register.html           # User registration page
│   └── forgot-password.html    # Forgot password/reset page
├── /assets/                    # Static assets (images, icons, SVGs)
│   ├── logo.png
│   └── background.jpg
├── /src/                       # Core source code (JS, CSS, components)
│   ├── /js/
├── firebase-config.js  # Firebase setup
│   │   ├── auth.js             # Handles login/register/reset logic
│   │   └── ui.js               # UI interactivity (animations, effects)
│   │
│   ├── /css/
│   │   ├── styles.css          # Global styles
│   │   └── auth.css            # Styles specific to auth pages
│   │
│   └── /components/            # Reusable HTML parts (optional)
│       ├── header.html
│       └── footer.html
│
├── /firebase/                  # Firebase configuration
│   ├── firebase.json           # Hosting setup
│   └── firestore.rules         # DB security rules
│
├── /docs/                      # Documentation
│   └── README.md
│
├── .gitignore
├── tailwind.config.js (optional)
├── package.json (optional)
└── LICENSE (if public)
```

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd docguard
    ```

2.  **Firebase Configuration:**
    Update `firebase/firebase-config.js` with your Firebase project credentials.

3.  **Run Locally:**
    You can serve the `index.html` file using any local web server (e.g., Live Server VS Code extension, `python -m http.server`).

## Features

-   **Login Page:** Secure user authentication via Firebase.
-   **Register Page:** New user registration with email and password.
-   **Forgot Password Page:** Email-based password reset functionality.
-   **Modern UI/UX:** Dark mode with neon effects, glowing buttons, and tech-style visuals.
-   **Responsive Design:** Built with Tailwind CSS for optimal viewing on various devices.

## Technologies Used

-   HTML5
-   Tailwind CSS
-   JavaScript (ES6+)
-   Firebase Authentication
-   Firestore (optional, for future data storage)

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

[Specify your license here, e.g., MIT License]