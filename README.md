# Welcome App

This project is a simple React Native app that displays a Welcome Screen with a navigation option to a Login Screen. The Welcome Screen includes text and buttons for navigation.

## Features
- Welcome Screen with a centered text.
- "Get Started" button at the bottom.
- "Do you have an account? Log In" link.
- Login Screen with input validation, password toggle, and styling.

---

## Prerequisites
1. **Install Node.js**: Ensure that Node.js (version 14.x or higher) is installed on your system. You can download it from [Node.js](https://nodejs.org/).
2. **Install Expo CLI**: Run the following command to install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```
3. **Install a Code Editor**: Use a code editor like Visual Studio Code (VS Code).
4. **Install Expo Go App** (on your phone): Download the Expo Go app from the Play Store (Android) or App Store (iOS).

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd <project-folder>
   ```

3. **Install Dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

---

## Running the App

1. **Start the Development Server**:
   ```bash
   npx expo start
   ```

2. **Open the App on Your Device**:
   - Scan the QR code shown in the terminal or the browser with the Expo Go app on your phone.
   - Alternatively, press `a` to run the app on an Android emulator or `i` for an iOS simulator (if configured).

3. **View the App**:
   - The Welcome Screen will load first.
   - Click "Get Started" or "Log In" to navigate to the Login Screen.

---

## Folder Structure
```
MyProject/
├── App.js
├── screens/
│   ├── WelcomeScreen.js
│   ├── LoginScreen.js
├── package.json
├── README.md
```

---

## Troubleshooting

- **Issue**: Expo CLI not found.
  **Solution**: Install Expo CLI globally with `npm install -g expo-cli`.

- **Issue**: App not running on device.
  **Solution**: Ensure your phone and computer are on the same Wi-Fi network and that the Expo Go app is installed.

---

## Contributing
Feel free to fork this repository and submit pull requests for improvements.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
