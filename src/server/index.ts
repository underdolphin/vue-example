import * as express from "express";

const app = express();
app.set("port", 3000);
app.get("/test/:name", (req,res) => {
    let data = req.params;
    console.log(data.name);
    res.send({name:data.name});
});

app.listen(app.get("port"), () => {});
module.exports = app;
