const express = require("express");
const app = express();
const {Eta} = require("eta");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")
require("dotenv").config({ path: `.env.local` });
const db = require("./models/MariaDB.js");
// const db = require("./models/Db.js");
// const fs = require("fs");
// const dayjs = require('dayjs')
// const { log } = require("console");
const { MorphineDb, Models, loadModels } = require("morphine-orm");
// import { MorphineDb, loadModels } from "morphine-orm";
// const { DbMysql, Models, loadModels } = require("./lib/MorphineOrm");

async function initApp() {
  await db.initMySQL();

  await MorphineDb.init({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    migrate: "alter", // alter, prod
    port: 3306,
  });
  await loadModels("../models");
  // global.Models = Models;

  // const { Lists } = Models;

  // pour créer une fiche
  // let list = await Lists.create({ li_name: "toto" }).exec();

  // pour trouver une fiche (ici avec l'ID 2)
  // let list = await Lists.findone(2).exec();
  // let list = await Lists.findone({ li_id: 2 }).exec();
  // let list = await Lists.findone({ li_id: 2 }).populate('nom_alias').exec(); // ici on populate avec une table liée

  // pour modifier une fiche (ici avec l'ID 2)
  // let list = await Lists.updateone(2, { li_name: "toto3" }).exec();
  // let list = await Lists.updateone("li_id=?", [2], { li_name: "toto4" }).exec();

  // pour trouver des fiches
  // let lists = await Lists.find({ li_name: "toto" }).exec();
  // let lists = await Lists.find("li_name like ?", ["%toto%"]).exec(); // le string est ce qu'il y a après WHERE dans la requête SQL
  // let lists = await Lists.find("li_name like ?", ["%toto%"]).populate('nom_alias').exec();

  // pour supprimer une fiche (ici avec l'ID 2)
  // await Lists.destroy(2).exec();
  // await Lists.destroy("li_id=?", [2]).exec();



  await initExpress();

  await initRoutes();
  await launchServer();
}

async function initExpress() {

 // Absolute path to views
// const viewsPath = path.join(__dirname, "views");

// const eta = new Eta({
//   views: viewsPath, // Important: absolute path!
//   cache: false
// });


  // app.engine("eta", eta.renderFile);

  // eta.configure({ views: "./views", cache: false });
  // app.set("view engine", "eta");
  // app.set("views", "./views");
  // app.set("view cache", false);
  app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
  app.use(bodyParser.json({ limit: "10mb" }));

  // Set up a whitelist and check against it:
  // let whitelist = [
  //   "http://localhost:5173",
  //   "http://localhost:5173/cani/1.jpg",
  //   "*",
  // ]; // Replace with your client's origin(s)
  // let corsOptions = {
  //   origin: "http://localhost:5173", // This will allow access from all origins
  //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // Allowed HTTP methods
  //   preflightContinue: true,
  //   allowTainte: false,
  //   optionsSuccessStatus: 204,
  //   // AccessControlAllowOrigin: "*",
  // };
  app.use(cors());

  app.use(express.static("assets"));


}

async function initRoutes() {
  const websiteRoutes = require("./routes/Website.routes");
  app.use("/", websiteRoutes);
  // const officeRoutes = require("./routes/Office.routes");
  // app.use("/office", officeRoutes);
}

async function launchServer() {
  app.listen(8000, async function () {
    console.log("listening on port 8000");
  });
}

initApp();
