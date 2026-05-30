# VocabBridge

VocabBridge is an Expo-based React Native app skeleton built with Expo Router. It currently includes a simple home screen and an explore screen, and is ready for vocabulary-focused UI and Firebase integration.

## Project overview

- pp/ contains Expo Router pages and root navigation
- pp/index.jsx is the home screen route
- pp/explore.jsx is the explore screen route
- pp/\_layout.jsx defines the stack navigation
- screens/, components/, services/, store/, constants/, and utils/ are available for app logic and structure
- Firebase is installed and ready to connect when you add backend features

## Getting started

1. Install dependencies

   `ash
npm install
`

2. Start the development server

   `ash
npx expo start
`

3. Choose a platform from the Expo CLI menu:

-  to open Android
- i to open iOS
- w to open web
- q to quit

## Useful scripts

- pm start — start Expo development server
- pm run android — run on Android device/emulator
- pm run ios — run on iOS simulator/device
- pm run web — open the web version
- pm run lint — run ESLint

## Next steps

- Edit pp/index.jsx and pp/explore.jsx to add app content
- Implement vocabulary lessons, word lists, and quizzes
- Connect irebase in services/api.js for data persistence
- Add UI components in components/
- Store app state in store/

## Notes

This project is currently a starter template. The screens are placeholders, so update them with your own app logic and branding as you build VocabBridge.
