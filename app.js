const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use (express.static("public"))
app.get ("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.listen(port, () => console.log("listening in port" + " " + port)); 