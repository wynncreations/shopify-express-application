const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const index = require('./Routes/index');

app.use('/',index);

app.listen(process.env.PORT || 8080, () => {
    console.log('Example app listening on port ' + process.env.PORT || 8080  + ' !');
});
