# Mobile Resume
<img width="100" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/icon.png">

Turning my resume into a mobile app...

<hr />

## Getting started
2. Create a file named **secrets.ts** inside of src/values and insert the following line:
   ```
   export const MAP_BOX_API = <YOUR_MAP_BOX_API_KEY>;
   ```
3. Go to the root folder, and run `yarn; yarn start`
4. Build and run the app:
    - iOS
      1. Navigate to the **ios** folder, and run `pod install`
      2. Open Xcode and build the app
    - Android
      1. Open the **android** folder in Android Studio
      2. Build the app

## Preview
||||
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/00.PNG">|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-01.PNG">|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-02.PNG">|
|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-03.PNG">|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-04.PNG">|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-05.PNG">|
|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/02.PNG">|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/03-01.PNG">|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/03-02.PNG">|
|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/04.PNG">|<img width="250" src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/05.PNG">||

## Dependencies
- react, react-native, and ExpoKit
- react navigation
- redux & react-redux
- react-native-mapbox-gl
- qs
- validator

## Tasks
- [x] Set up app layout (e.g., stack/tab navigators)
- [x] Design app icon and splash
- [ ] Create app introduction slider
- [x] Show contact information
- [x] Show summary / personal quote
- [x] Show languages
- [x] Integrate ~~react-native-maps~~ react-native-mapbox-gl
- [x] Link to GitHub profile
- [x] Create the Contact Form screen
  - [x] Add a name, email, phone (optional), and message field
  - [x] Show system alert when something is wrong (e.g., missing data, invalid data, etc.)
  - [x] Create a custom slider component to send emails
  - [x] Create a custom, animated error dialog
    - [ ] Replace `componentWillReceiveProps` with a memoization helper
  - [ ] Integrate reCAPTCHA and Mailgun
- [x] Create the About App screen
  - [x] Create a custom, animated circle button
  - [x] Create HTML-like HOC components for paragraph, text and bullet point style
- [x] Create the Education screen
  - [x] Link to school websites
- [x] Create the Experience screen
  - [x] Show three bullet points at most
  - [x] Create Experience Detail screen
    - [x] Make job description bullet points scrollable
- [x] Create the Skills screen
- [x] Create the Recognition screen
- [x] Add background image
- [x] Detach app (with ExpoKit)

## Feedback

Please fork it and play with it. In case you have any feedback, feel free to open a new issues on this repo or reach out to me [**@thomashzhu**](https://github.com/thomashzhu).
