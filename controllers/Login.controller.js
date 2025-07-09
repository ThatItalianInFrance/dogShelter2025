// const Login = require('../models/Login.model.js');
const { MorphineDb, Models, loadModels } = require("morphine-orm");
// const { Models } = require("../lib/MorphineOrm");
const { Users } = Models;

const bcrypt = require("bcrypt");
const saltRounds = 10;

const TokenGenerator = require('uuid-token-generator');

module.exports = {


  logUser: async (req, res) => {
    // let row = await Login.login(req.body);
    
    let row = await Users.findone({ us_email: req.body.username}).exec();
    // console.log(row);
    try {
       bcrypt.compare( req.body.password, row.us_password, async function(err, result) {
        console.log(result);
      if (result == true) {
        const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
       let token = tokgen2.generate();
        console.log(token);
        res.send({ data: token, us_email: req.body.username });
       // window.location.href = "/";
       return;
      }
    });
    } catch (err) {
      res.redirect("/login");
    }

  },

  checkUser: async (req, res, next) => {
    let [, poo] = req.headers.authorization.split(" ");
    console.log(poo);
    if (poo) next();
    else res.redirect("/login");
  },

  // Your user validation function
// This needs to check the provided credentials against your user store (e.g., a database)
validateUser: async (email, password) => {
  // Implement your user validation logic here
  // For example, check against users stored in a database
  console.log('validation start');
  email = req.us_email;
  password = req.us_password;
  console.log("user: " + email + " " + "pass: " + password);

  let rows = await Users.findone({ us_email: req.params.us_email,  }).exec();
  // conn = await db.getConnection();
  // const rows = await conn.query(
  //   `SELECT * FROM users WHERE username="${email}" AND password=SHA1('${pwd}')`
  // );


  if (rows.length == 0) {
    console.log("no rows");
    return;
  } else {
    console.log('login ok');

  }
  // console.log(rows[0]);
  return rows;
},

postLogout:  () => {

}, 


}
