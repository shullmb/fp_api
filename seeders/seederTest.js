const csv = require('csvtojson');
const INPUT = './data/output.csv';

const parameters = {
    delimiter: ',',
    trim: false
}

const jsonArr=await csv(parameters).fromFile(INPUT)

console.log(jsonArr)