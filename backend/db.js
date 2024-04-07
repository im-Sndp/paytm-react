const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://stalukdar:UUjbIiNbcmTThkBY@cluster0.qdro4uv.mongodb.net/paytm");

const userSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String
})

const User = mongoose.model("User",userSchema);

module.exports = {
    User
}