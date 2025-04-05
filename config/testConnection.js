const promisePool = require('./database');

async function testConnection() {
    try {
        const [rows] = await promisePool.query('SELECT 1 + 1 AS result');
        console.log('Conexión exitosa:', rows);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
    } finally {
        process.exit(); 
    }
}

testConnection();