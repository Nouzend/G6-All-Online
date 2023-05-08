const mysql = require('mysql2/promise');
//ท็อป
const dbConfig = {
  host: "ap-southeast.connect.psdb.cloud",
  user: "u66prabqe3tntawqjrza",
  password: "pscale_pw_dZKoypgV2aIvZFXnFc59HwASH9mIm7fx45cufkkr2gC",
  database: "featuresall",
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
