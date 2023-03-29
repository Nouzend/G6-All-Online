const mysql = require('mysql2/promise');
//ท็อป
const dbConfig = {
  host: 'ap-southeast.connect.psdb.cloud',
  user: 'lxzt9cod1ddl3q61v6at',
  password: 'pscale_pw_HC1U7gizymLc6HnEZ3v0aYTjpBldxLBUnNKXeAkl6r2',
  database: 'db_project',
  ssl: { rejectUnauthorized: false },
};

async function createConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to database');
    return connection;
  } catch (error) {
    console.log('Error connecting to database:', error);
    return null;
  }
}

const connection = createConnection();

module.exports = connection;
