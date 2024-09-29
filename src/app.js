const express  = require("express");
const connectDB = require("./config/database")
const app = express();   //express js application
const User = require("./models/user");
require("./config/database");

app.use(express.json());
//overwrites - anything that amtches after slash
// app.use("/",(req, res) => {
//     res.send("Hello from server!")
//

app.post("/signup", async (req, res)=> {
    //creating a new instance of user model
    // const user = new User({
    //     firstName: "siddhi",
    //     lastName: "uttekar",
    //     emailId:"siddhi@gmail.com",
    //     password: "siddhi@123",
    // });

    const user = new User(req.body);

    await user.save();
    res.send("user added successfully")



})

//get user by email
app.get("/user", async(req, res)=> {
    const userEmail = req.body.emailId;

    try{
        const user = await User.find({emailId: userEmail});
        res.send(user);
    }
    catch{
        res.status(400).send("something went wrong")
    }
})

connectDB().then(() => {
    console.log("database successfully established!");
    app.listen(4000, ()=>{
        console.log("server is successfully listening on port 4000");
    });
}).catch(err=>{
    console.error("database cannot be connected!")
})
