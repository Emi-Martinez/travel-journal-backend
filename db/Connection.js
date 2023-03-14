const mysql = require('mysql2')

const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        database: process.env.DB_NAME || 'travel_journal',
        password: process.env.DB_PASSWORD || '',
        ssl: {
            rejectUnauthorized: false
        }
    }
)

module.exports = connection.promise()