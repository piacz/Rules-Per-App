# Rules-Per-App

This sample Application demonstrates how to create a Single Page Application that interacts with Auth0's Management API. On successful login, it dynamically generates a list of the Clients configured on a tenant with their respective rules applied to each one of them. The React front-end makes calls to an Express API as a back-end service protected with Auth0 Authentication and Authorization.

A rule was applied to this application to restrict the access the main resource to a specific whitelist of users.

![2021-06-08 (2)](https://user-images.githubusercontent.com/73494684/121229704-ac6c5e00-c864-11eb-9e62-97d65c76a99b.png)

<hr>

### Step by step to set up the application locally:

## Auth0 Configuration

  1. Sign in to your Auth0 account.
  2. Create a Node Express API in Auth0 (Machine to Machine). Once created, in the APIs section, authorize it to request access tokens from the Auth0 Management API, also selecting the permissions needed. In this case: `read:clients`, `read:rules`, and `create:rules`.
  3. Create a Single Page Application in Auth0 and allow your localhost `http://localhost:4040/` in the Callback URLs, Logout URLs and Web Origins sections.

## Running the app

  1. Download or git clone this code to your localhost.
```bash
git clone https://github.com/piacz/Rules-Per-App.git
cd auth0-rules-per-app
```
  2. Install the dependencies on the Client and the API.
```bash
npm install
```
  3. Configure enviroment variables according to the instructions on each Readme file on the Client and Api. Finally, start on each one of them.
```bash
npm start
```
