# React App

This repository hosts a React project that defines a Single-Page Application (SPA). The access to some of its routes is protected using Auth0 User Authentication and <a href='https://auth0.com/docs/libraries/auth0-react'>Auth0 React SDK</a>, which uses React Context to manage the authentication state of the users. This allows not only protecting the routes from the back-end but from the front-end too using the `withAuthenticationRequired` higher order component and `useAuth0` hook.

## Step by step to run the application locally:

1. Install the client project dependencies:

```bash
npm install
```

2. Create `.env` file under the project directory:
```
touch .env
```
3. Populate `.env` as follows:
```
REACT_APP_AUTH0_DOMAIN={YOUR AUTH0 DOMAIN}
REACT_APP_AUTH0_CLIENT_ID={YOUR AUTH0 CLIENT ID}
REACT_APP_AUTH0_AUDIENCE={YOUR API IDENTIFIER https://express.sample}
REACT_APP_SERVER_URL=http://localhost:6060
```
Or use the `.env.example` and populate with your own values:
```
cp .env.example .env
```

4. Run the client project:

```bash
npm start
```

The application runs by on port `4040` to mitigate conflicting with other client applications you may be running.

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.
