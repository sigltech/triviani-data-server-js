const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/", (req, res) => {
//     res.send("Hello World!");
// });

fetchAll = (callback) => {
    
  };

app.get("/", (req, res) => {
    res.send(`This is the home page. hello World!`);
})

app.get("/data", (req, res) => {

    fs.readFile("./data.json", "utf8", (err, jsonString) => {
        try {
          const data = JSON.parse(jsonString);
          console.log( data );
          res.send(`This is the data page your data is: ${JSON.stringify(data)}`);
        } catch (err) {
          console.log("Error parsing JSON string:", err);
        }
      });
})

app.post("/data", (req, res) => {
    const data = req.body;
    console.log(data);
    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
        if (err) console.log(err);
        res.send(`This is the data page your data is: ${JSON.stringify(data)}`);
    }
    );
})


app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send({ msg: "404 Not Found" });
});

module.exports = app;
