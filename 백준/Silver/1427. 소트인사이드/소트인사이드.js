let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('').map(Number);

let output = "";

input.sort((a, b) => {return b-a});

for(let i = 0; i < input.length; i++){
    output += input[i].toString();
}

console.log(output);