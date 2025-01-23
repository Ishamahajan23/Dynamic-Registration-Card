# Dynamic-Registration-Card
# User Registration and Display Project

This is a simple web application that allows users to register by providing their name, username, and email. The registered users are stored in the browser's `localStorage` and displayed on the homepage (`index.html`). Users can also delete their information from the list.

## Features
- **User Registration**: Users can enter their name, username, and email to register.
- **Local Storage**: User data is stored in the browser’s `localStorage` to persist between sessions.
- **Display Registered Users**: All registered users are displayed on the homepage.
- **Delete User**: Users can delete their own data from the list, and the changes are reflected in `localStorage`.

## Usage

1. **Register a New User**:
    - Open `cart.html`.
    - Fill in your name, username, and email.
    - Click the "Register" button.
   
2. **View Registered Users**:
    - After registering, you will be redirected to `index.html` where you will see the newly registered user listed.

3. **Delete a User**:
    - On the homepage (`index.html`), click the "Delete" button next to any user you want to remove.
    - The user is deleted both from the page and from `localStorage`.

## How It Works

- When a user registers, their information is added to the `users` array in `localStorage`.
- The `users` array is read from `localStorage` and displayed on `index.html`.
- If a user is deleted, their data is removed from both the displayed list and `localStorage`.
- The data persists even after a page reload or browser restart, as it’s stored in `localStorage`.

## Technologies Used

- **HTML** for page structure.
- **CSS** for styling.
- **JavaScript** for functionality (user registration, display, and deletion).
- **localStorage** to save data across page reloads.

