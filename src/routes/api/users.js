// src/routes/api/users.js

import db from '$lib/db';

export async function get() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM users', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    body: {
                        users: rows
                    }
                });
            }
        });
    });
}
