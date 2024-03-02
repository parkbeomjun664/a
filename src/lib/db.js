
import sqlite from 'sqlite3';

const dbPath = 'path/to/your/database.sqlite';

const db = new sqlite.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database: ', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

export default db;
