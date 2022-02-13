const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
const cors = require("cors");
const keyRoutes = require("./routes/keys");
mongoose.connect(
  "mongodb+srv://sweta:sweta@assignment.cs9x2.mongodb.net/Assignment-databases?retryWrites=true&w=majority"
).then(()=>{
    console.log("connected databases")
})
app.use(cors());


app.use(bodyParser());

app.use("/", keyRoutes);
app.listen("3070", console.log("Server listening to port 3070"));
