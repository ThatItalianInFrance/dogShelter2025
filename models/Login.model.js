const { log } = require("console");
let db = require("../models/MariaDB.js");
const fs = require("fs");

// Your user validation function
// This needs to check the provided credentials against your user store (e.g., a database)
async function validateUser(email, password) {
  // Implement your user validation logic here
  // For example, check against users stored in a database
  console.log('validation start');
  email = req.email;
  pwd = req.password;
  console.log("user: " + email + " " + "pass: " + pwd);
  conn = await db.getConnection();
  const rows = await conn.query(
    `SELECT * FROM users WHERE username="${email}" AND password=SHA1('${pwd}')`
  );

  if (rows.length == 0) {
    console.log("no rows");
    return;
  } else {
    console.log('login ok');

  }
  // console.log(rows[0]);
  return rows;
}

// const login = async (req, res) => {
//   console.log('here dude');
//   let email = req.email;
//   let pwd = req.password;
//   console.log("user: " + email + " " + "pass: " + pwd);
//   conn = await db.getConnection();
//   const rows = await conn.query(
//     `SELECT * FROM users WHERE username="${email}" AND password=SHA1('${pwd}')`
//   );

//   if (rows.length == 0) {
//     console.log("no rows");
//     return;
//   } else {
//   }
//   // console.log(rows[0]);
//   return rows;
// };

const login = async (req, res) => {

  console.log('welcome to the LOGIN FORM')
  let email = req.email;
  let pwd = req.password;
  console.log(email)
  console.log(pwd)
  //   let response = await fetch('http://localhost:8000/office/login', {
  //     method: 'POST',
  //     headers: {

  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ name: email, password: pwd })
  //   })
  //   let user = await response.json();
  // console.log({response});
  //  console.log(user.data[0].token);
  //     console.log(user.token);
  //     if (user) {
  //      localStorage.setItem('user', JSON.stringify(user.data[0].token));
  //     // window.location.href = "/";
  //     return;
  //   } else {
  //     console.log("no user in localstorage");
  //   }
}




module.exports = {
  login,
  validateUser,
};
