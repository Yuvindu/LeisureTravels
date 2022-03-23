const express = require("express");
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const cors = require("cors");
 require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb connection success!");
})

const equipmentRouter = require("./routes/equipment.js");
app.use("/equipment",equipmentRouter);



app.listen(PORT, () =>{
    console.log(`The port is : ${PORT}`);
})
