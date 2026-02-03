const express = require("express");
const mongoose = require("mongoose");

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"


main().then(() => {
    console.log("Connected");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(8080, () =>{
    console.log("Server is started on http://localhost:8080/");
});