var axios = require("axios").default;

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort, domain, apiId, apiSecret } = require("./config/env.dev");

const { messagesRouter } = require("./messages/messages.router");
const { listsRouter } = require("./lists/lists.router");

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);
apiRouter.use("/lists", listsRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */
var tokenRequest = {
  method: 'POST',
  url: `https://${domain}/oauth/token`,
  headers: {'content-type': 'application/json'},
  data: {
    grant_type: 'client_credentials',
    client_id: apiId,
    client_secret: apiSecret,
    audience: `https://${domain}/api/v2/`,
  }
};



app.listen(serverPort, async () => {
  console.log(`API Server listening on port ${serverPort}`)
  let managementToken = (await axios.request(tokenRequest)).data.access_token;

  // var options = {
  //   method: 'POST',
  //   url: 'https://dev-piacz.us.auth0.com/api/v2/rules',
  //   headers: {
  //     'content-type': 'application/json',
  //     authorization: `Bearer ${managementToken}`,
  //     'cache-control': 'no-cache'
  //   },
  //   data: {name: "Whitelist for a Specific App", 
  //   script: "function userWhitelistForSpecificApp(user, context, callback) {\n  // Access should only be granted to verified users.\n  if (!user.email || !user.email_verified) {\n    return callback(new UnauthorizedError('Access denied.'));\n  }\n\n  // only enforce for NameOfTheAppWithWhiteList\n  // bypass this rule for all other apps\n  if (context.clientName !== 'Piauth0') {\n    return callback(null, user, context);\n  }\n\n  const whitelist = ['piaczernyk@gmail.com', 'user2@example.com']; // authorized users\n  const userHasAccess = whitelist.some(function (email) {\n    return email === user.email;\n  });\n\n  if (!userHasAccess) {\n    return callback(new UnauthorizedError('Access denied.'));\n  }\n\n  callback(null, user, context);\n}",}
  // };
  
  // await axios.request(options)
  }
);
