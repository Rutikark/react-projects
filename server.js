const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "users",
});

app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  console.log("registered values");
  db.query(
    "INSERT INTO users(firstName,lastName,email,password,confirmPassword) VALUES(?,?,?,?,?)",
    (firstName, lastName, email, password, confirmPassword),
    (err, Result) => {
      console.log(err);
    }
  );
});

app.listen(8000, () => {
  console.log("server is running");
});
