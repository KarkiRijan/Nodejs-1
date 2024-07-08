const mongoose = require('mongoose')
async function connectToDb() {
    console.log("connecting....")
    await mongoose.connect("mongodb+srv://rijkar58:Karjanho@cluster0.t9bkdpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("connected");
}
module.exports = connectToDb