var pool = require('./bd');

async function getCuenta() {
    var query = "select * from cuenta order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function deleteCuentaById(id) {
    var query = "delete from cuenta where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = {getCuenta, deleteCuentaById}