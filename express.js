const express = require('express');
const app = express();
const port = 3298;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const dataFile = path.join(__dirname, './data.json');



app.listen(port, () => {
    console.log("server started on port", port);
})