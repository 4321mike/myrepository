const express = require ("express")
const server = express();

server.get("/", function (req, res) {
    res.send ("<h1>hello world</h1>");
});

server.listen(3000,function () {
    console.log("server listening on port 3000");
 });