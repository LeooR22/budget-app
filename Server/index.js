const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "budgetRecordSystem",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const concept = req.body.concept;
  const amount = req.body.amount;
  const date = req.body.date;
  const type = req.body.type;

  db.query(
    "INSERT INTO records (concept, amount, date, type) VALUES (?,?,?,?)",
    [concept, amount, date, type],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/records", (req, res) => {
  db.query("SELECT * FROM records", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yay, your server is running on port 3001");
});
