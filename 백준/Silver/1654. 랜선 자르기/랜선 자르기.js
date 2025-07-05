let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let caseSub = input[0].split(' ').map(Number);
let testCase = caseSub[0];
let subject = caseSub[1];
let data = [];

for(let i = 1; i < input.length; i++){
    data.push(Number(input[i]));
}

let start = 1;
let end = data.reduce((a, b) => Math.max(a, b));

while(start <= end){
    let mid = Math.floor((start + end) / 2);
    let lanCount = 0;

    for(let i = 0; i < testCase; i++){
        let count = Math.floor(data[i]/mid)
        lanCount += count > 0 ? count : 0;
    }

    if(lanCount < subject){
        end = mid - 1;
    }else{
        start = mid + 1;
    }
}

console.log(end);