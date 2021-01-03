const { Pool, Client } = require('pg')

const client = new Client({
    user: 'postgres',
  host: '127.0.0.1',
  database: 'shopping',
  password: 'password',
  port: 5432
  })
  client.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  })

  module.exports = client;