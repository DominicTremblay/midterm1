module.exports = (db) => {
  console.log('inside helpers');
  const getUsers = () => {
    return db
      .query(`SELECT * FROM users;`)
      .then((data) => data.rows)
      .catch((err) => err.message);
  };

  getUsersWidgets = () => {
    const queryContent = {
      text: `SELECT users.id as user_id, users.name as username, widgets.id as widget_id, widgets.name as widget_name
            FROM users
            INNER JOIN widgets
            ON users.id = widgets.user_id
            `,
    };

    return db
      .query(queryContent)
      .then((result) => result.rows)
      .catch((err) => err.message);
  };

  return {
    getUsers,
    getUsersWidgets
  };
};
