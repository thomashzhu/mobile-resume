# Mobile Resume

Turning my resume into a mobile app...

<hr />

## Getting started
1. Clone this repository
   ```
   git clone https://github.com/thomashzhu/mobile-resume.git
   ```
2. Navigate to the root directory and run `yarn`
3. Create a file named secrets.ts inside of src/values and insert the following line:
   ```
   export const MAP_BOX_API = <YOUR_MAP_BOX_API_KEY>;
   ```
4. Build and run the app

## Preview
<div style={{ display: flex; flex-direction: row; justify-content: space-around }}>
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/00.PNG" width="250" />
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-01.PNG" width="250" />
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-02.PNG" width="250" />
</div>
<div style={{ display: flex; flex-direction: row; justify-content: space-around }}>
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-03.PNG" width="250" />
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-04.PNG" width="250" />
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/01-05.PNG" width="250" />
</div>
<div style={{ display: flex; flex-direction: row; justify-content: space-around }}>
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/02.PNG" width="250" />
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/03-01.PNG" width="250" />
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/03-02.PNG" width="250" />
</div>
<div style={{ display: flex; flex-direction: row; justify-content: space-around }}>
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/04.PNG" width="250" />
   <img src="https://github.com/thomashzhu/mobile-resume/raw/master/assets/screenshots/05.PNG" width="250" />
</div>

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
