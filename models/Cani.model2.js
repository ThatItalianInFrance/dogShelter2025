let db = require("./MariaDB.js");
// let db = require("../models/Db.js");
const fs = require("fs");
const find = async (where = "1=1") => {
    conn = await db.getConnection();

    const rows = await conn.query("SELECT * FROM Dogs");
    console.log(rows); //[ {val: 1}, meta: ... ]
    // const [rows, fields] = await db.getConnection().query("SELECT * FROM cani");
    return rows;
}
const findone = async (id) => {
    conn = await db.getConnection();

    const rows = await conn.query(`SELECT * FROM Dogs WHERE id=${id}`);

    if (!rows[0]) return null;
    let p = rows[0];
    p.hasImg = fs.existsSync(`./assets/cani/${id}.jpg`);
    return p;
}
const create = async (data) => {
    conn = await db.getConnection();
    // console.log("cane id", data.id);
    const rows = await conn.query(
        "INSERT INTO cani (nome, razza, carattere, birth, taglia, sesso, mantello, morsicatore, sterilizzazione, chip, terapia, patologie, alive, kind, onHome) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [data.nome, data.razza, data.carattere, data.birth, data.taglia, data.sesso, data.mantello, data.morsicatore, data.sterilizzazione, data.chip, data.terapia, data.patologie, data.alive, data.kind, data.onHome]
    );
    // le top est de renvoyer le produit créé, so...
    let row = await findone(rows.insertId);
    return row;
}
const update = async (id, data) => {
    conn = await db.getConnection();

    const rows = await conn.query(
        `UPDATE cani SET nome=?, razza=?, carattere=?, birth=?, taglia=?, sesso=?, mantello=?, morsicatore=?, sterilizzazione=?, chip=?, terapia=?, patologie=?, alive=?, kind=?, onHome=? WHERE id=${id}`,
        [data.nome, data.razza, data.carattere, data.birth, data.taglia, data.sesso, data.mantello, data.morsicatore, data.sterilizzazione, data.chip, data.terapia, data.patologie, data.alive, data.kind, data.onHome]
    );
    // le top est de renvoyer le produit modifié, so...
    let row = await findone(id);
    return row;
}
const destroy = async (id) => {
    conn = await db.getConnection();

    const rows = await conn.query(
        `DELETE FROM cani WHERE id=${id}`
    );
    return rows;
}

const saveImage = (req, id) => {
    console.log("saveimage fired");
    if (!req.body.image) {
        console.log("no image arrived to server");
        return;
    }
    let base64Image = req.body.image.split(';base64,').pop();
    console.log(id + "This is on server");
    let filename = `./assets/cani/${id}.jpg`;
    try {
        fs.writeFileSync(filename, base64Image, 'base64');

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    find,
    findone,
    create,
    update,
    destroy,
    saveImage
}
