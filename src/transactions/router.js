let express = require('express')
let router = express.Router()
const bcrypt = require('bcrypt');
const { BlockChainModel, BlockModel, TransactionModel, AppSettings } = require("./models")
const salt_rounds = 10;

//Register a user
router.post("/initiate-transaction", async (req, res, next) => {
    let data = req.body

    try {
        const data = await TransactionModel.create(data.transaction);
        const appSettings = await AppSettings.findOne({ _id: "6329445bf1340c643e137b1c" });
        return res.status(200).json({
            data: appSettings.prev_hash_id
        })
    } catch(e) {

    }

    
    return res.status(200).json({
        message: "User created successfully"
    })
});

//Login a user
router.get("/app-settings/:id", async (req, res, next) => {
    let data = req.params.id;

    try {
        const returnValue = await AppSettings.findOne({ _id: data });
        return res.status(200).json({
            "Msg": "User logged in successfully",
            "data": returnValue
        })
    } catch(e) {
        return res.status(200).json({
            "Msg": "User logged in successfully",
        })
    }

});

router.post("/app-settings", async (req, res, next) => {
    let data = req.data;

    try {
        const returnValue = await AppSettings.create(data);
        return res.status(200).json({
            "Msg": "User logged in successfully",
            "data": returnValue
        })
    } catch(e) {
        console.log(e);
        return res.status(500).json({
            "Msg": "User logged in successfully",
        })
    }

});

module.exports = router;
