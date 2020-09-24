const connection = require("./connection.js");

function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  let arr = [];

  for (let key in ob) {
    arr.push(`${key}=${ob[key]}`);
  }

  return arr.toString();
}

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
    console.log(`${table} ${cols} ${vals}`); //for testing delete later
    let queryString = `INSERT INTO ${table} (${cols}) VALUES ('${vals}')`;

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    let sqlItem = objToSql(objColVals);
    let queryString = `UPDATE ${table} SET ${sqlItem} WHERE ${condition}`;

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