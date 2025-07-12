// const Cani = require("../services/Dogs.model2.js");

const { MorphineDb, Models, loadModels } = require("morphine-orm");
const { Dogs } = Models;

const fs = require("fs");
// let formidable = require("formidable");
const { log } = require("console");
const path = require("path");

module.exports = {
  getDogs: async (req, res) => {
    // let rows = await Cani.find();
    // let dog = await Dogs.create({
    //     name: "toto",
    //     birth: "2021-01-01",
    //     kind: 1,
    //     size: "petit",
    // }).exec(true);
    let rows = await Dogs.find().populate("kind").populate("dogsbox").exec();
    res.send({ data: rows });
  },

  getCaneId: async (req, res) => {
    // let row = await Cani.findone(req.params.id);
    let row = await Dogs.findone({ do_id: req.params.id })
      .populate("kind")
      .exec();
    console.log("🚀 ~ file: Cani.controller.js:23 ~ getCaneId: ~ row:", row);
    let AttachmentsList = [];
    const uploadFolder = path.join(
      __dirname,
      "../assets/cani/",
      `${req.params.id}`
    );

    fs.readdir(uploadFolder, (err, files) => {
      // Read the directory
      if (err) {
        // Handle the error
        console.error(err);
        // return AttachmentsList;
      }
      files.forEach((file) => {
        // Loop through the files
        AttachmentsList.push(file);
        console.log(file); // Display the file name
      });
      console.log(AttachmentsList); // Display the file name
      res.send({ data: row, files: AttachmentsList });
    });
    // res.send({ data: row, files: AttachmentsList });
  },
  postCane: async (req, res) => {
    // let row = await Cani.create(req.body);
    // console.log(req.body.IncomingForm);
    console.log("33");
    // console.log(req);
    // let do_id = await Dogs.create(req.body).exec(true);
    // console.log(row.id);
    let row = await Dogs.create(req.body).exec(true);
    console.log("line 37");
    // console.log(row.do_id);
    // saveImage(req, row.do_id);
    // const form = formidable({});

    res.send({
      data: row,
      FormData: form,
    });
  },
  putCaneId: async (req, res) => {
    // let row = await Cani.update(req.params.id, req.body);
    let row = await Dogs.updateone({ do_id: req.params.id }, req.body).exec(
      true
    );
    saveImage(req, req.params.id);

    let finalName;
    const options = {
      filter: function ({ name, originalFilename, mimetype }) {
        // keep only images
        // return mimetype && mimetype.includes("image");
        console.log(originalFilename);
        finalName = originalFilename;
        return originalFilename;
      },
      filename: (name) => {
        console.log(name);
        return finalName;
      },
    };

    let form = new formidable.IncomingForm(options);
    const uploadFolder = path.join(
      __dirname,
      "../assets/cani/",
      `${req.params.id}`
    );

    if (!fs.existsSync(uploadFolder)) {
      // Check if the folder exists
      fs.mkdirSync(uploadFolder); // Create the folder if not
      console.log("Folder created successfully.");
    } else {
      console.log("Folder already exists.");
    }
    // fs.readdir (uploadFolder, (err, files) => { // Read the directory
    //   if (err) { // Handle the error
    //     console.error (err);
    //     return;
    //   }
    //   files.forEach (file => { // Loop through the files
    //     console.log (file); // Display the file name
    //   });
    // });
    // Basic Configuration
    form.multiples = true;
    form.maxFileSize = 50 * 1024 * 1024; // 5MB
    form.uploadDir = uploadFolder;
    form.originalFilename = "ciccio.jpg";
    // console.log(form);
    form.keepExtensions = true;

    [fields, files] = await form.parse(req);
    console.log(files);

    res.send({ data: row });
  },
  deleteCaneId: async (req, res) => {
    // let row = await Cani.delete(req.params.id);
    let row = await Dogs.destroy({ do_id: req.params.id }).exec();
    res.send({ data: row });
  },
};

async function saveImage(req, do_id) {
  console.log("saveimage fired");
  if (!req.body.image) {
    console.log("no image arrived to server");
    return;
  }
  let base64Image = req.body.image.split(";base64,").pop();
  let filename = `./assets/cani/${do_id}.jpg`;
  try {
    fs.writeFileSync(filename, base64Image, "base64");
  } catch (error) {
    console.log(error);
  }
}
