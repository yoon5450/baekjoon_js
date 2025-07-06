let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(path).toString().trim();

let totalKg = Number(input);
let summery = -1;

for (let bigBag = Math.floor(totalKg / 5); bigBag >= 0; bigBag--) {
    let remainder = totalKg - (bigBag * 5);
    
    if (remainder % 3 === 0) {
        let smallBag = remainder / 3;
        summery = bigBag + smallBag;
        break;
    }
}


console.log(summery);