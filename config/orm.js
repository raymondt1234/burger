const connection = require("./connection.js");

const orm = {
  selectAll: function (tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;
    
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols}) VALUES ('${vals}')`;

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function (table, burgerId, cb) {
    let queryString = `UPDATE ${table} SET devoured=1 WHERE id=${burgerId}`;

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;