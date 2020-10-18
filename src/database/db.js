// importando o banco de dados
const Database = require("sqlite-async");

// função para criar uma tabela se não existir banco
function execute(db) {
  return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            long TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `);
}

module.exports = Database.open(__dirname + "/database.sqlite").then(execute)
