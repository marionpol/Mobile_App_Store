React Native + Appwrite + Expo

## Mobile app where you can put up listings

This is a mobile app which is made with React Native and Expo. It also uses appwrite databases for making accounts.
In this app you can create an account, check listings, categorize them and also add your own listings.

1. Install dependencies

   ```bash
   npm install
   ```
   ```bash
   npx create-expo-app@latest
   ```

   ### Check the package.json file for more dependecies

2. Start the app

   ```bash
    npx expo start
   ```
When the app starts use your phone to scan the QR code that is in the terminal (on IOS you can use your camera, on android you have to install the expo-go app and then scan the QR code).

3. Creating a database in appwrite

https://appwrite.io/ > create an account > create a project and choose whatever option you prefer (I used the web platform)

Create a database with an account table which has the username, email and password attributes . Create a connection between the application and the database - creating the appwrite.js file in the appwrite folder and adding the necessary keys.

4. Improvements

Currently the google login doesnt function at all since I haven't found a viable solution for it to work properly.



