let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let numSet = new Set();

for(let i = 0; i < 10; i++){
    numSet.add(input[i]%42);
}

console.log(numSet.size);