let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let take = Number(input[0]);
let data = input[1].split(' ').map(Number);
let max = Math.max(...data);

for(let i = 0; i < take; i++){
    data[i] = data[i]/max * 100;
}

console.log(data.reduce((a,b) => a+b)/take);