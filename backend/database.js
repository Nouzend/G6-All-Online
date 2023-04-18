const mysql = require('mysql2/promise');
//ท็อป
const dbConfig = {
  host: 'ap-southeast.connect.psdb.cloud',
  user: 'drkbhmjbe11da0sd5i3o',
  password: 'pscale_pw_7uYjws4cDq2jkEsCO1ZATvWaYDOPTPogUgdfDLwwapM',
  database: 'featuresall',
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
