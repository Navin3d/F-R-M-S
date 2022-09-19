const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: ['*','http://localhost:3000']
}));

app.get('/hello', (req, res) => {
    res.status(200).json({ messgae: "Hello!" });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));