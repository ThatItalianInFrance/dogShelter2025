// const Kind = require('../models/Kind.model.js');

const { Models } = require("../lib/MorphineOrm");
const { Kinds } = Models;


module.exports = {
    getKinds: async (req, res) => {
        // let rows = await Kind.find();
        let rows = await Kinds.find({}).exec();
        res.send({ data: rows });
    },
    getKindId: async (req, res) => {
        let row = await Kinds.findone( req.params.id );
        res.send({ data: row });
    },
    postKind: async (req, res) => {
        let row = await Kinds.create(req.body);
        // console.log(row.id);
        // let id = await Kind.create(req.body)
        // console.log(row.id);
        Kinds.saveImage(req, row.id);
        res.send({ data: row });
    },
    putKindId: async (req, res) => {
        let row = await Kinds.update(req.params.id, req.body);
        Kind.saveImage(req, row.id);
        res.send({ data: row });
    },
    deleteKindId: async (req, res) => {
        let row = await Kind.delete(req.params.id);
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
