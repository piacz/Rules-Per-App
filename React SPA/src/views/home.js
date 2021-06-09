import React, { Fragment } from "react";

import "../css/home.css";


const Home = () => (
  <Fragment>
    <div id='homeContainer'>
      <h1>Rules per Application Sample Project</h1>
      <div className='homeText'>
        <p>This is a sample application that 
          demonstrates a connection with <a href='https://auth0.com/docs/api/management/v2'>Auth0's Management 
          API</a> to dynamically access every application configured on a 
          tenant and their respective rules applied, showing them on the <a href='http://localhost:4040/external-api'>Apps List section</a>. The endpoints 
          called through an Express API are:
        </p>
        <ul>
          <li>GET /api/v2/rules</li>
          <li>GET /api/v2/clients</li>
          <li>POST /api/v2/rules</li>
        </ul>
        <p>This resource is protected by Auth0's authentication and Authorization
          by the <a href='https://auth0.com/rules/simple-user-whitelist'> Whitelist for a Specific App rule</a>
        </p>
      </div>
    </div>
  </Fragment>
);

export default Home;
