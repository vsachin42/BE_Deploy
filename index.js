const express = require("express");
const {connection} = require("./db");
const { userRouter } = require("./routes/user.route");
const { noteRouter } = require("./routes/note.route");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/notes", noteRouter);


app.listen(process.env.port, async () => {
    try{
      await connection
      console.log(`Connected to the db`);
      console.log(`Running at ${process.env.port} port`);
    }catch(err){
        console.log(err);
        console.log("Something went wrong");
    }
});