let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(path).toString().trim();

let cur = Number(input);
let operCount = 0;

for(let i = 1; i <= cur; i++){
    cur -= i;
    operCount++;
}

console.log(operCount);

