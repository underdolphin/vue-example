import express = require("express");
import http = require("http");
import mongoose = require("mongoose");

const app = express();
app.set("port", process.env.PORT || 3000);

http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
  mongoose.connect("mongodb://localhost/vue-example-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

module.exports = app;
