const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');
const index = require('./Routes/index');

const apiKey = process.env.apiKey;
const apiSecret = process.env.apiSecret;
const scopes = 'read_products';
const forwardingAddress = "https://betterorders.herokuapp.com/shopify"; // Replace this with your HTTPS Forwarding address

app.use('/',index);

app.listen(process.env.PORT || 8080, () => {
    console.log('Example app listening on port ' + process.env.PORT || 8080  + ' !');
});
