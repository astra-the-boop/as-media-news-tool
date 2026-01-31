const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3299;

const BASE = "/as-media";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    if (req.path.endsWith("editor.html")) {
        return res.status(403).send("Forbidden");
    }
    next();
});

app.use(BASE, express.static("public"));

const dataFile = path.join(__dirname, "data.json");

function read() {
    if (!fs.existsSync(dataFile)) return {};
    return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function write(data) {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

app.get(`${BASE}/`, (req, res) => {
    res.sendFile(path.join(__dirname, "public/page.html"));
});

app.get(`${BASE}/page`, (req, res) => {
    res.sendFile(path.join(__dirname, "public/page.html"));
});

app.get(`${BASE}/editor`, (req, res) => {
    res.sendFile(path.join(__dirname, "public/editor.html"));
});

app.post(`${BASE}/submit`, (req, res) => {
    const { title, body, date, publisher, writer, subtext, location } = req.body;
    write({ title, body, date, publisher, writer, subtext, location });
    res.redirect(`${BASE}/page`);
});

app.get(`${BASE}/content`, (req, res) => {
    res.json(read());
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}${BASE}`);
});
