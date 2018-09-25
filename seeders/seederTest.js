const csv = require('csvtojson');
const db = require('../models');
const INPUT = './data/output.csv';

const parameters = {
    delimiter: ',',
    trim: false
}

csv(parameters).fromFile(INPUT).then( arr => {
    arr.sort( (a, b) => a['Zip'] - b['Zip'])
    for (let i = 0; i < 25; i ++) {
        console.log(arr[i]['Zip'])
    }
})
