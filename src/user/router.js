let express = require('express')
let router = express.Router()
const bcrypt = require('bcrypt');
const { User } = require("./models")
const salt_rounds = 10;

//Register a user
router.post("/create-user", async (req, res, next) => {
    let data = req.body
    let email = data.email;
    let count = await User.count({ email: email })
    if (count > 0) {
        return res.status(400).json({
            "Msg": "User with email exists"
        })
    }
    count = await User.count({ phone_number: data.phone_number })
    if (count > 0) {
        return res.status(400).json({
            "Msg": "Phone number already exists"
        })
    }
    const salt = await bcrypt.genSalt(salt_rounds);

    data.password = await bcrypt.hash(data.password, salt);
    try {
        await User.create(data)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            "Error": "Unexpected error occurred"
        })
    }
    return res.status(200).json({
        message: "User created successfully"
    })
});

//Login a user
router.post("/login-user", async (req, res, next) => {
    let data = req.body
    let email = data.email;
    let count = await User.count({ email: email })
    if (count == 0) {
        return res.status(400).json({
            "Msg": "User with email does not exists"
        })
    }
    let user = await User.findOne({ email: email })
    let password = data.password;
    let result = await bcrypt.compare(password, user.password)
    if (result == false) {
        return res.status(400).json({
            "Msg": "Password is incorrect"
        })
    }

    return res.status(200).json({
        "Msg": "User logged in successfully",
        "user_id": user._id
    })
});

module.exports = router;
