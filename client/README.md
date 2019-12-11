This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation & Setup

In the project directory, first run

### `npm i`

This will load all required modules and libraries. There is no production build, so this is meant only for development and testing purposes.

## First time start up

1. On first run, navigate to the root directory where `gulpfile.babel.js` is and run `gulp sass`. This will transpile all the scss files and create the neccesary min styles if they do not already exist.
2. Update the package.json's `proxy: "http://localhost:8080"` to the node server's address if required.

## Run

To run the app make sure that the backend node server is running first. Then simply use:

### `npm start`

## Design Decisions

The app was approached with a "mobile first" mentality and scalability was kept in mind while designing this weather app. Redux was used to create a store to manage state and Thunk was used to create asynchronous dispatch actions. React has a top-down approach but with Redux, we are able to connect the store to any of our components and mapping the states to the props without necessarily passing it all the way down from the top. This lets use manage our states and allows us to dispatch actions easier in a non-blocking manner.

All stateless components are placed inside the components folder and each have their own scss file that is imported inside of styles.scss in the styles folder. These scss files are watched and automatically transpiled each time by Gulp when a change is detected.

Containers are kept inside of the containers folder and these containers handle all the logic needed for functionality and passes all required props down to our presentational components or stateless components.

Material UI was used for pre-styled components used in making buttons, cards, loading progress, and feedback.

Babel is used so that we can use ESNext syntax.

## Components and Containers

Components:

1. App
2. Buttons
3. Footer
4. FormTextField
5. Header
6. Icons
7. Layout

Containers:

1. SearchForm
2. Weather

## Packages and Libraries

#### Node Fetch

Used to make our requests.

#### Redux and React-Redux

Redux is used to manage our store and states, react-redux is required for React bindings.

#### Redux Forms

Used to manage our form fields.

#### Material Ui

Provides stylized presentational components.

#### Redux Devtools Extension

Redux chrome extension to help inspect Redux activity, this includes dispatched actions, states, and more.

#### Redux Logger

Console logs state change and dispatched actions.

#### Thunk

Used in conjunction to Redux to provide asynchronous actions.

#### Babel

Used for ESNext syntax

#### React SVG

Used to inject SVG files

#### Gulp

Automated tasks with watcher
