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

async function insertCuenta(obj) {
    try {
        var query = "insert into cuenta set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getCuentaById(id) {
    var query = "select * from cuenta where id=? ";
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarCuentaById(obj, id) {
    try {
        var query = "update cuenta set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getCuenta, deleteCuentaById, insertCuenta, getCuentaById, modificarCuentaById }