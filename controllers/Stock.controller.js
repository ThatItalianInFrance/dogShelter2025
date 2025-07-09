const Stock = require('../models/Stock.model.js');

module.exports = {
 getStock: async (req, res) => {
  let rows = await Stock.find();
  res.send({ data: rows });
 },
 getStockId: async (req, res) => {
  let row = await Stock.findone(req.params.id);
  res.send({ data: row });
 },
 postStock: async (req, res) => {
  let row = await Stock.create(req.body);
  console.log(row.id);
  // let id = await Stock.create(req.body)
  console.log(row.id);
  Stock.saveImage(req, row.id);
  res.send({ data: row });
 },
 putStockId: async (req, res) => {
  let row = await Stock.update(req.params.id, req.body);
  Stock.saveImage(req, row.id);
  res.send({ data: row });
 },
 deleteStockId: async (req, res) => {
  let row = await Stock.delete(req.params.id);
  res.send({ data: row });
 }
}


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
