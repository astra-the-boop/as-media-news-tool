const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3298;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const dataFile = path.join(__dirname, './data.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

function read(){
    return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

function write(data){
    const {title,body} = req.body;
    fs.writeFileSync(dataFile,JSON.stringify(data, null, 2));
}

app.get("/submit", (req, res) => {
    const {title, body} = req.body;
    write({title, body});
    res.redirect("/page.html")
})

app.get("/content", (req, res) => {
    res.json(read());
})

app.listen(port, () => {
    console.log("server started on port", port);
})