# React Native Template (TypeScript, TailwindCSS, Redux-Toolkit)

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## Prerequisites

- [Node.js > 18 | 19.5.0](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 15](https://developer.apple.com/xcode)
- [Cocoapods 1.15.2](https://cocoapods.org)
- [JDK > 17](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base Dependencies

- [@react-native-firebase](https://rnfirebase.io/) for Firebase features.
- [react-navigation](https://reactnavigation.org/) for navigation.
- [nativewind](https://www.nativewind.dev/) for using Tailwind CSS as a scripting language to create a universal style system for React Native.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for icons.
- [react-native-paper](https://reactnativepaper.com/) for UI components.
- [react-native-swiper](https://www.npmjs.com/package/react-native-swiper) for a swiper component.
- [redux-toolkit](https://redux-toolkit.js.org/) for state management.
- [react-redux](https://react-redux.js.org/) for React bindings used in Redux.
- [redux-persist](https://github.com/rt2zz/redux-persist) for persistence.
- [redux-thunk](https://github.com/gaearon/redux-thunk) for dispatching asynchronous actions.
- [jest](https://facebook.github.io/jest/) for testing.

## Usage

Use the following script to generate a fresh React Native project with additional components already included. 
Replace `AwesomeProject` with your app name.

```
npx react-native init AwesomeProject --template mdmush/react-native-template
```

## Folder structure

This template follows a straightforward project structure:

- `Routes.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.
- `android`: Contains all the native Android code.
- `ios`: Contains all the native iOS code.
- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Folder to store all images, fonts, etc.
  - `components`: Folder to store any common component used throughout your app (such as Header, Screen, etc.).
  - `constants`: Folder to store any constants.
  - `tab-screens`: Folder containing all the screens used in tabs.
  - `screens`: Folder containing all your application screens, e.g., `Splashscreen.tsx`
  - `store`: Folder for Redux middlewares, the store, and Redux Toolkit slices (such as `userSlice.ts`).

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store
