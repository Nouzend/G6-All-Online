const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "ap-southeast.connect.psdb.cloud",
  user: "lxzt9cod1ddl3q61v6at",
  password: "pscale_pw_HC1U7gizymLc6HnEZ3v0aYTjpBldxLBUnNKXeAkl6r2",
  database: "db_project",
});

app.get("/api/search", (req, res) => {
  const query = req.query.query;

  connection.query(
    "SELECT * FROM table WHERE column LIKE ?",
    [`%${query}%`],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json(results);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});