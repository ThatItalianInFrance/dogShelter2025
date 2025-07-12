const Shelter = require("../services/Shelter.model.js");

module.exports = {
  getAllShelters: async (req, res) => {
    let rows = await Shelter.find();
    res.send({ data: rows });
  },
  getShelterId: async (req, res) => {
    let row = await Shelter.findone(req.params.id);
    res.send({ data: row });
  },
  postShelter: async (req, res) => {
    let row = await Shelter.create(req.body);
    console.log(row.id);
    // let id = await Shelter.create(req.body)
    console.log(row.id);
    // Shelter.saveImage(req, row.id);
    res.send({ data: row });
  },
  putShelterId: async (req, res) => {
    let row = await Shelter.update(req.params.id, req.body);
    // Shelter.saveImage(req, row.id);
    res.send({ data: row });
  },
  deleteShelterId: async (req, res) => {
    let row = await Shelter.delete(req.params.id);
    res.send({ data: row });
  },
};

// function saveImage(req, id) {
//     console.log("saveimage fired");
//     if (!req.body.image) {
//         console.log("no image arrived to server");
//         return;
//     }
//     let base64Image = req.body.image.split(';base64,').pop();
//     let filename = `./assets/cani/${id}.jpg`;
//     try {
//         fs.writeFileSync(filename, base64Image, 'base64');

//     } catch (error) {
//         console.log(error);
//     }
// }
