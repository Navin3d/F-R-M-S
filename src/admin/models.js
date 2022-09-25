const mongoose = require("../../DB");

const admin = new mongoose.Schema({
    name: String,
    password: String,
    designation: String,
    email: {
        type: String,
        unique: true
    },
    phone_number: {
        type: String,
        unique: true
    }
});

const adminModel = new mongoose.model("admin", admin);

module.exports = {
    "Admin": adminModel
}
