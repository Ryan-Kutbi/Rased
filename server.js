const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const employees = require("./routes/api/employees");
const jobs = require("./routes/api/jobs");
const departments = require("./routes/api/departments");

const app = express();

// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.use("/api/users", users);
app.use("/api/jobs", jobs);
app.use("/api/employees", employees);
app.use("/api/departments", departments);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
