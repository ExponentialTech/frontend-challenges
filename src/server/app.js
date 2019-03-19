const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('dist'));

/**
 * Set a get request that will send the parsed json file
 */
app.get('/api/getCompanyData', (req, res) => {
    let obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    res.send(obj);
});

module.exports = app;