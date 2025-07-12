const mariadb = require("mariadb");
let conn;
async function initMySQL() {
  try {
    const pool = mariadb.createPool({
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DBNAME,

      connectionLimit: 5,
    });
    // console.log(process.env.DBHOST);
    conn = await pool.getConnection();
    // const rows = await conn.query("SELECT 1 as val");
    // console.log(rows); //[ {val: 1}, meta: ... ]
    // const res = await conn.query("INSERT INTO myTable value (?, ?)", [
    //   1,
    //   "mariadb",
    // ]);
    // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      // console.log(conn);
      console.log("Connection to MariaDB initialized...");

      return conn;
      // conn.end();
    }
  }
}
async function getConnection() {
  // console.log(conn);
  console.log("connected to MariaDB");
  return conn;
}
module.exports = {
  initMySQL,
  getConnection,
  // pool,

};