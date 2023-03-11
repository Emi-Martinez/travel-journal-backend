const mysql = require('mysql2')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'travel_journal',
        user: 'root',
        password: ''
    }
)

module.exports = connection.promise()