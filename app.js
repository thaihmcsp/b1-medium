require('dotenv').config();
const express = require('express');
const { startup } = require('./startup');
const path = require("path")
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/publics", express.static(path.join(__dirname, 'publics')));
app.use("/views", express.static(path.join(__dirname, 'views')));

startup(app);

app.listen(process.env.PORT, () => {
    console.log('server run port', process.env.PORT);
});