const mongoose = require("../../DB");

const blockchain = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    },
    block: [],
    balance: Number
});

const block = new mongoose.Schema({
    data: [],
    prev_hash: String,
    hash: String,
    time_stamp: String,
    noance: Number,
    no_of_additions: Number
});

const transaction = new mongoose.Schema({
    receiver_id: String,
    sender_id: String,
    amount: Number
});

const appSettings = new mongoose.Schema({
    block_chain_id: String,
    prev_hash_id: String
});

const blockchainModel = new mongoose.model("blockchain", blockchain);
const blockModel = new mongoose.model("block", block);
const transactionModel = new mongoose.model("transaction", transaction);
const appSettingsModel = new mongoose.model("appSettings", appSettings);

module.exports = {
    "BlockChainModel": blockchainModel,
    "BlockModel": blockModel,
    "TransactionModel": transactionModel,
    "AppSettings": appSettingsModel
}
