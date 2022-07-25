require('dotenv').config();
const express = require('express');
const { startup } = require('./startup');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use('/publics',(express.static(path.join(__dirname,'./publics'))));
app.use('/publics',(express.static(path.join(__dirname,'./publics'))));
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

startup(app);

app.listen(process.env.PORT, () => {
    console.log('server run port', process.env.PORT);
});