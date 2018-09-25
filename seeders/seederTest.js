const fs = require('fs');
const csv = require('csvtojson');
// const db = require('../models');
const INPUT = './data/output.csv';

const parameters = {
    delimiter: ',',
    trim: false
}

csv(parameters).fromFile(INPUT).then( arr => {
    fs.writeFile('./data/output.json', JSON.stringify(arr))
})
