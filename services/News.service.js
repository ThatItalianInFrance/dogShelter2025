let db = require("./MariaDB.js");
const fs = require("fs");



const find = async (where = "1=1") => {
    conn = await db.getConnection();

    const rows = await conn.query("SELECT * FROM news");
    return rows;
}
const findone = async (id) => {
    conn = await db.getConnection();

    const rows = await conn.query(
        `SELECT * FROM news WHERE id=${id}`
    );
    if (!rows[0]) return null;
    let p = rows[0];
    p.hasImg = fs.existsSync(`./assets/news/${id}.jpg`);
    return p;
}
const create = async (data) => {
    conn = await db.getConnection();

    const rows = await conn.query(
        "INSERT INTO news (title, date_start, date_end, content, image, author_id) VALUES ( ?, ?, ?, ?, ?, ?)",
        [data.title, data.date_start, data.date_end, data.content, data.image, data.author_id]
    );
    // le top est de renvoyer le produit créé, so...
    let row = await findone(rows.insertId);
    return row;
}
const update = async (id, data) => {
    conn = await db.getConnection();

    const rows = await conn.query(
        `UPDATE news SET title=?, date_start=?, date_end=?, content=? WHERE id=${id}`,
        [data.title, data.date_start, data.date_end, data.content]

    );
    // le top est de renvoyer le produit modifié, so...
    let row = await findone(id);
    return row;
}
const destroy = async (id) => {
    const [rows, fields] = await db.getConnection().query(
        `DELETE FROM news WHERE id=${id}`
    );
    return rows;
}

module.exports = {

    find,
    findone,
    create,
    update,
    destroy,
}
