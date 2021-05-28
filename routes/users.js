/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get('/', (req, res) => {
    dbHelpers
      .getUsers()
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });

  router.get('/widgets', (req, res) => {
    dbHelpers
      .getUsersWidgets()
      .then((usersWidgets) => res.json(usersWidgets))
      .catch((err) => res.json(err));
  });
  return router;
};
