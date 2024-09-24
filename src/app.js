const express  = require("express");

const app = express();   //express js application

app.use("/test",(req, res) => {
    res.send("Hello from server!")
})

app.listen(3000, ()=>{
    console.log("server is successfully listening on port 3000");
});