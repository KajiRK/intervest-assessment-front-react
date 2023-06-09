# Intervest Assessment Frontend - React

The front application developed using ReactJs with TypeScript template. This repo contains the development of login and dashboard screens with stocks data integrated.

### Pre-installed and used packages
- React hook form - To manage form of login
- TailwindCSS - For UI components development
- Redux toolkit - Redux state management to store stocks related data 
- ApexCharts - For charts development
- Axios - To manage promise based HTTP client request
- momentjs - To convert and format dates
- yup - For form validations

### Things that I completed in this assessment
- Login screen with basic authentication
- Dashboard screen with stocks data widgets
- Picked one Ticker's related data for the week and displayed in the dashboard
- Redux store implemented to store stocks data for selected ticker
- Sidebar navigation implemented with react router
- Implemented few unit test cases

#### Login Screen
![Login Screen](https://github.com/KajiRK/intervest-assessment-front-react/blob/master/src/assets/images/screens/LoginPage.png)

#### Dashboard Screen
![Dashboard Screen](https://github.com/KajiRK/intervest-assessment-front-react/blob/master/src/assets/images/screens/HomePage.png)

### Require .env values
Duplicate .env.example inside root dir and change the file name into .env and set below mentioned variables.
- REACT_APP_API_KEY - Place your own API KEY
- REACT_APP_TICKER - Name of the ticker

## To run the project

In the project directory, you can run:

### `yarn install`

Then, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
