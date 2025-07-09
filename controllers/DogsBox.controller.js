// const B = require('../models/B.model2.js');
const { Models } = require("../lib/MorphineOrm");
const { DogsBox, Box } = Models;

const fs = require("fs");
module.exports = {
    getDogsBox: async (req, res) => {
        let rows = await DogsBox.find().populate('dogs').populate('box').exec();
        res.send({ data: rows });
    },
    getDogBoxId: async (req, res) => {
        console.log("req.params.id === ", req.params.id);
        // let row = await Box.findone({ bo_id: req.params.id}).exec();
        let row = await DogsBox.findone({ do_id: req.params.id }).exec();
        console.log("🚀 ~ file: Cani.controller.js:23 ~ getCaneId: ~ row:", row)
        res.send({ data: row }); 
    },
    postCaniBox: async (req, res) => {
        let row = await DogsBox.create(req.body).exec();
        console.log("line 19" + row);
        // let id = await B.create(req.body)
        // console.log(row.id);
        DogsBox.saveImage(req, row.id);
        res.send({ data: row });
    },
    putCaniBoxId: async (req, res) => {
        let row = await DogsBox.update(req.params.id, req.body).exec();
        console.log(req.params.id);
        console.log(req.body);

        console.log("line 30");
        console.log(row);

        // B.saveImage(req, row.id);
        res.send({ data: row });
    },
    deleteCaniBoxId: async (req, res) => {
        let row = await DogsBox.delete(req.params.id);
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
