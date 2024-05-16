const mongoose = require("mongoose");

let MONGODB_URL = "mongodb://localhost:27017/url-shortener"

const connectDB = async() => {
    // Connect to MongoDB using Mongoose
   await mongoose.connect(MONGODB_URL)
    .then(()=>{console.log("Successfully connected to MongoDB")})
    .catch((err)=>{console.log(`Failed to connect to MongoDB: ${err}`)})
}

module.exports = {connectDB};
