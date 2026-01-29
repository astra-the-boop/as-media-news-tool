const express = require('express');
const app = express();
const port = 3298;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/submit", (req, res) => {
    console.log("form received", req.body); //debugery
    const {title, body} = req.body;
    res.send(req.body);
});

app.listen(port, () => {
    console.log("server started on port", port);
})