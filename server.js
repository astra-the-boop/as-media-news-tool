import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

const dataFile = "./article.json";

app.post("/update", async (req, res) => {
    fs.writeFileSync(dataFile, JSON.stringify(req.body, null, 2));
    res.json({ok:true});
})

app.get("/article", async (req, res) => {
    if(!fs.existsSync(dataFile)) {
        return res.json({});
    }
    res.json(JSON.parse(fs.readFileSync(dataFile)));
})

app.use(express.static("public"));

app.listen(3285, ()=>{
    console.log("server running on port 3285");
});