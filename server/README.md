## Installation & Setup

In the project directory, first run

### `npm i`

This will load all required modules and libraries. There is no production build, so this is meant only for development and testing purposes.

### This server must be started first before the React App will function properly

## First time start up

1. Create a `.env` file in the root of the project. Inside should contain the following:
    - NODE_ENV = 'development'
    - DARKSKY_KEY = 'YOUR_KEY'
    - IPSTACK_KEY = 'YOUR_KEY'
    - GOOGLE_KEY = 'YOUR_KEY'
2. Inside of `config -> config.js` update the following:
    - app.set('HTTP_PORT', `YOUR_PORT`)
    - corsConfig whitelist with any addresses that you need to add for cross origins.

## Run

To run the server simply use:

### `npm start`

## Future Considerations

1. Implement Node Helmet

Better out of the box security for all node servers.

2. Server Side Rendering

Consider some server side rendering for small pre-loads to the client side. This can provide a better user experience.

3. Implement Apollo and GraphQL

With Apollo we can easily use web sockets with our front end React app to provide near real-time data.

We can also use GraphQL to help manage queries easier through saving resources. Client-side does not always need every single field provided in the data responses and GraphQL can help leviate that.

4. Implement Data Loader

Cache some of the queries and save on resources.

## APIs

#### Google Geolcoder

Used to grab coordinates of a given zip code.

#### IpStack

Used to grab coordinates of a given ip address.

#### Dark Sky

Used to grab the weather data of a given set of coordinates.

## Packages and Libraries

#### Node Fetch

Used to make our requests.

#### Babel

Used for ESNext syntax

#### Dotenv

Used to manage and import ENV variables

#### Express

A wrapper for Node servers

#### Cors

Cross Origin settings

#### Body Parser

Middleware to parse incoming requests

#### Nodemon

Used to execute our node server scripts. (Development)
