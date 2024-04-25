const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydatabase.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});
db.run(`CREATE TABLE IF NOT EXISTS documents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  downloadKey TEXT NOT NULL,
  documentId TEXT NOT NULL UNIQUE
)`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Table is created.');
  }
});

module.exports = db;
