# Auth0 Express API Sample (JavaScript)

This repository contains a Node.js project that defines an Express API. This API is protected with Auth0 to practice making secure API calls from a client application.The primary route responds a list of the Clients configured on the tenant with their respective rules applied to each one of them through Auth0's Management API.

## Enviroment Variables Configuration

Install the client project dependencies:

```bash
npm install
```

Create `.env` file under the project directory:

```bash
touch .env
```

Populate `.env` as follows:

```bash
SERVER_PORT=6060
CLIENT_ORIGIN_URL=http://localhost:4040
AUTH0_AUDIENCE=
AUTH0_DOMAIN=

AUTH0_API_ID=
AUTH0_API_SECRET=
```
Or copy the `.env.example` and populate with your own values:
```bash
cp .env.example .env
```

Get the values for `AUTH0_API_ID`, `AUTH0_API_SECRET`, `AUTH0_AUDIENCE` and `AUTH0_DOMAIN` from your Auth0 API in the Dashboard.

Head back to your Auth0 API page, and **follow these steps to get the Auth0 Audience**:


1. Click on the **"Settings"** tab.

2. Locate the **"Identifier"** field and copy its value.

3. Paste the "Identifier" value as the value of `AUTH0_AUDIENCE` in `.env`.

Now, **follow these steps to get the Auth0 Domain value**:


1. Click on the **"Test"** tab.
2. Locate the section called **"Asking Auth0 for tokens from my application"**.
3. Click on the **cURL** tab to show a mock `POST` request.
4. Copy your Auth0 domain, which is _part_ of the `--url` parameter value: `tenant-name.region.auth0.com`.
5. Paste the Auth0 domain value as the value of `AUTH0_DOMAIN` in `.env`.

## Whitelist for Specific Users Rule:

On `index.js`, choose the users to authorize, the Client to apply the rule (in this case, the React sample for the front-end) and the name of the rule on the `whitelist`, `client`, and `nameOfRule` variables.

```js
let whitelist = `['piaczernyk@gmail.com', 'user2@example.com']` // Whitelist of authorized users
let client = 'Front Rules Per App' // Client to apply the rule
let nameOfRule = 'Whitelist for an App' // Name of the rule, rules can't repeat the same name than other rules in the tenant
```


With the `.env` configuration values and rule set, run the API server by issuing the following command:

```bash
npm start
```
