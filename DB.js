let mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://localhost:55000/frms", {
        // poolSize: 10,
        authSource: "admin",
        user: "docker",
        pass: "mongopw",
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    });
}

main().then(() => {
    console.log("db connection created successfully")
}).catch((err) => {
    console.log(err)
})

module.exports = mongoose;
