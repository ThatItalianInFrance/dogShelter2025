const UserCani = require('../models/UsersCani.model.js');

module.exports = {
    getUsersCani: async (req, res) => {
        let rows = await UserCani.find();
        res.send({ data: rows });
    },
    getUserCaniId: async (req, res) => {
        let row = await UserCani.findone(req.params.id);
        res.send({ data: row });
    },
    postUserCani: async (req, res) => {
        let row = await UserCani.create(req.body);
        res.send({ data: row });
    },
    putUserCaniId: async (req, res) => {
        let row = await UserCani.update(req.params.id, req.body);
        res.send({ data: row });
    },
    deleteUserCaniId: async (req, res) => {
        let row = await UserCani.delete(req.params.id);
        res.send({ data: row });
    }
}


function saveImage(req, id) {
    console.log("saveimage fired");
    if (!req.body.image) {
        console.log("no image arrived to server");
        return;
    }
    let base64Image = req.body.image.split(';base64,').pop();
    let filename = `./assets/cani/${id}.jpg`;
    try {
        fs.writeFileSync(filename, base64Image, 'base64');

    } catch (error) {
        console.log(error);
    }
}
