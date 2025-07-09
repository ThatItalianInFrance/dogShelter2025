// const Box = require('../models/Box.model2.js');

const { Models } = require("../lib/MorphineOrm");
const { Box } = Models;

module.exports = {
    getBox: async (req, res) => {
        let rows = await Box.find().exec();
        res.send({ data: rows });
    },
    getBoxId: async (req, res) => {
        console.log("Box id ====",req.params.id);
        let row = await Box.findone({ bo_id: req.params.id }).exec();
        res.send({ data: row });
    },
    postBox: async (req, res) => {
        let row = await Box.create(req.body);
        console.log(row.id);
        // let id = await Box.create(req.body)
        console.log(row.id);
        Box.saveImage(req, row.id);
        res.send({ data: row });
    },
    putBoxId: async (req, res) => {
        let row = await Box.update(req.params.id, req.body);
        Box.saveImage(req, row.id);
        res.send({ data: row });
    },
    deleteBoxId: async (req, res) => {
        let row = await Box.delete(req.params.id);
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
