# Rules-Per-App

This sample Application demonstrates how to create a Single Page Application that interacts with Auth0's Management API. On successful login, it dynamically generates a list of the Clients configured on a tenant with their respective rules applied to each one of them. The React front-end makes calls to an Express API as a back-end service protected with Auth0 Authentication and Authorization.

A rule was applied to this application to restrict the access to the main resource to a specific whitelist of users.

![2021-06-09 (3)](https://user-images.githubusercontent.com/73494684/121418435-56211d00-c941-11eb-8ecb-b9b991180ca3.png)


<hr>

### Step by step to set up the application locally:

## Auth0 Configuration

  1. Sign in to your Auth0 account.
  2. Create a Node Express API in Auth0 (Machine to Machine). Once created, in the APIs section, authorize it to request access tokens from the Auth0 Management API, also selecting the permissions needed. In this case: `read:clients`, `read:rules`, and `create:rules`.
  ![Token auth example](https://user-images.githubusercontent.com/73494684/121382327-dd0fce80-c91c-11eb-8dd3-39b38e41f136.jpg)

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
  3. Configure enviroment variables according to the instructions on each Readme file from the Client and Api. Finally, start on each one of them.
```bash
npm start
```
