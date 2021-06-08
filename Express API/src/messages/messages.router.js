/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const { getPublicMessage, getProtectedMessage } = require("./messages.service");
const { checkJwt } = require("../authz/check-jwt");
const { lists } = require('../lists/lists.router')

/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET messages/

messagesRouter.get("/public-message", (req, res) => {
  const message = getPublicMessage();
  console.log( lists )
  res.status(200).send(message);
});

messagesRouter.get("/protected-message", checkJwt, (req, res) => {
  const message = getProtectedMessage();
  res.status(200).send(message);
});

module.exports = {
  messagesRouter,
};
