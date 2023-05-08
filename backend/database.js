const mysql = require('mysql2/promise');
//ท็อป
const dbConfig = {
  host: 'ap-southeast.connect.psdb.cloud',
  user:'ovzkbxvq1nqpgvm5nhjx',
  password:'pscale_pw_Kk7faCtAL1WJ7AdRMHbBYnf0Umf1fLdhiywcgzi9PwD',
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
