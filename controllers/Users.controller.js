// const Users = require('../models/Users.model.js');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { Models } = require("../lib/MorphineOrm");
const { Users } = Models;

module.exports = {
  getUsers: async (req, res) => {
    let rows = await Users.find().exec();
    res.send({ data: rows });
  },
  getUserId: async (req, res) => {
    let row = await Users.findone({ us_id: req.params.id }).exec();
    res.send({ data: row });
  },
  postUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(req.body.us_password, salt);
      console.log(req.body.us_password);
      req.body.us_password = hash;
      console.log(req.body.us_password);
      let row = await Users.create(req.body).exec(true);
      res.send({ data: row });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ error: "An error occurred while creating the user." });
    }
  },

  putUserId: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(req.body.us_password, salt);
      console.log(req.body.us_password);
      req.body.us_password = hash;
      console.log(req.body.us_password);
      let row = await Users.update({ us_id: req.params.id }, req.body).exec(
        true
      );
      res.send({ data: row });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ error: "An error occurred while updating the user." });
    }
  },
  deleteUserId: async (req, res) => {
    let row = await Users.destroy({ us_id: req.params.id }).exec();
    res.send({ data: row });
  },
  
  saveImage: async (req, id) => {
  console.log("saveimage fired");
  if (!req.body.image) {
    console.log("no image arrived to server");
    return;
  }
  let base64Image = req.body.image.split(";base64,").pop();
  let filename = `./assets/cani/${id}.jpg`;
  try {
    fs.writeFileSync(filename, base64Image, "base64");
} catch (error) {
    console.log(error);
  }
},


};
