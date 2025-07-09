const StockEvents = require('../models/StockEvents.model.js');

module.exports = {
 getStockEvents: async (req, res) => {
  let rows = await StockEvents.find();
  res.send({ data: rows });
 },
 getStockEventsId: async (req, res) => {
  let row = await StockEvents.findone(req.params.id);
  res.send({ data: row });
 },
 postStockEvents: async (req, res) => {
  let row = await StockEvents.create(req.body);
  console.log(row.id);
  // let id = await StockEvents.create(req.body)
  console.log(row.id);
  StockEvents.saveImage(req, row.id);
  res.send({ data: row });
 },
 putStockEventsId: async (req, res) => {
  let row = await StockEvents.update(req.params.id, req.body);
  StockEvents.saveImage(req, row.id);
  res.send({ data: row });
 },
 deleteStockEventsId: async (req, res) => {
  let row = await StockEvents.delete(req.params.id);
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
