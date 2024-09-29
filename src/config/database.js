const mongoose = require("mongoose");

//password-VUqle66ZfY9Kr8le

const URI = "mongodb+srv://uttekarsiddhi145:VUqle66ZfY9Kr8le@clusterdevtinder.y1qec.mongodb.net/"

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://uttekarsiddhi145:VUqle66ZfY9Kr8le@clusterdevtinder.y1qec.mongodb.net/");
};

module.exports = connectDB;
