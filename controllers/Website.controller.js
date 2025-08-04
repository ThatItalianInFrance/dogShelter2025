const { MorphineDb, Models, loadModels } = require("morphine-orm");

// const Box = require('../models/Box.model.js');
// const Dogs = require('../models/Cani.model.js');
// const Kind = require('../models/Cani.model.js');
const Login = require("../services/Login.model.js");
// const News = require('../models/News.model.js');
// const { Models } = require("../lib/MorphineOrm");
const dayjs = require('dayjs');
const { Dogs, News } = Models;

const getHome = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
// const backofficeUrl = process.env.BACKOFFICE_URL
  let dogs = await Dogs.find().populate("kind").exec();

  res.render("home.eta", { dogs });
};
const getNews = async (req, res) => {
 let news = await News.find().exec();
    res.render("news.eta", { news });
}
const getLogin = async (req, res) => {
  res.render("login.eta", {});
};

const getVisit = async (req, res) => {
  console.log("ID from params:", req.params.id);
console.log("Type:", typeof req.params.id);
    let dog = await Dogs.findone({ do_id: req.params.id }).exec();
    // console.log(dog)
    res.render("visit_form.eta", { dog });

    // res.redirect('/cani/list');
}

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userIsValid = await validateUser(email, password);
    if (userIsValid) {
      // User's credentials are valid
      req.session.userId = userIsValid.id; // Or whatever user identifier you use
      res.redirect("/dashboard"); // Redirect to a dashboard or home page
    } else {
      // User's credentials are invalid
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    // Handle errors, e.g., database connection issues
    res.status(500).send("An error occurred during login");
  }
};

const getDogsList = async (req, res) => {
  let dogs = await Dogs.find().populate("kind").exec();
  console.log(dogs)
  res.render("../views/dogs_list.eta", { dogs });
};
// const getBoxList = async (req, res) => {
//     let stalli = await Box.find();
//     res.render("box_list.eta", { stalli });
// }
const getDogId = async (req, res) => {
    let dog = await Dogs.findone({ do_id: req.params.id }).populate("kind").exec();
    if (!dog) {
        res.redirect("/dogs/list");
        return;
    }
    dog.months = Math.round((Date.now() - Date.parse(dog.do_birth)) / 1000 / 60 / 60 / 24 / 30);
    dog.months = dayjs().diff(dog.do_birth, 'months') % 12
    dog.years = Math.floor(dayjs().diff(dog.do_birth, 'months') / 12)
    res.render("dog_details.eta", { dog });
}

module.exports = {
  getLogin,
  getHome,
  getDogsList,
  getDogId,
  // postLogin,
  // getBoxList,
  getNews,
  getVisit,
};
