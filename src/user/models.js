const mongoose = require("../../DB");

const user = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: true
    },
    phone_number: {
        type: String,
        unique: true
    }
});

const userModel = new mongoose.model("user", user);

module.exports = {
    "User": userModel
}
