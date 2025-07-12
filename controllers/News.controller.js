const News = require("../services/News.model.js");

module.exports = {
  getAllNews: async (req, res) => {
    let rows = await News.find();
    res.send({ data: rows });
  },
  getNewsId: async (req, res) => {
    let row = await News.findone(req.params.id);
    res.send({ data: row });
  },
  postNews: async (req, res) => {
    let row = await News.create(req.body);
    console.log(row.id);
    // let id = await News.create(req.body)
    console.log(row.id);
    // News.saveImage(req, row.id);
    res.send({ data: row });
  },
  putNewsId: async (req, res) => {
    let row = await News.update(req.params.id, req.body);
    // News.saveImage(req, row.id);
    res.send({ data: row });
  },
  deleteNewsId: async (req, res) => {
    let row = await News.delete(req.params.id);
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
