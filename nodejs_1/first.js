const csv = require('csv-parser')
const fs = require('fs')
const results = [];
 
fs.createReadStream('sample.csv')
  .pipe(csv())
  .on('data', console.log)
//   .on('end', () => {
//     console.log(results);
//   });