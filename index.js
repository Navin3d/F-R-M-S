const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
let transactions_router = require("./src/transactions/router"); // a1 router is recruiter router
let user_router = require("./src/user/router"); // a2 router is admin or vao router
let admin_router = require("./src/admin/router"); // a3 router is admin router

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: ['*', 'http://localhost:3000']
}));

app.use("/transaction", transactions_router);
app.use("/user", user_router);
app.use("/admin", admin_router);

app.listen(port, () => console.log(`App listening on port ${port}!`));
