const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    const queryContent = {
      text: 'SELECT * from maps where id = $1',
      value: [10],
    };

    db.query(queryContent)
      .then((result) => res.json(result.rows[0]))
      .catch((err) => res.json(err.message));
  });

  return router;
};
