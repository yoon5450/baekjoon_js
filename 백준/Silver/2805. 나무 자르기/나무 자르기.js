let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let input0 = input[0].split(' ').map(Number);
let testCase = input0[0];
let subject = input0[1]
let data = input[1].split(' ').map(Number);
let end = data.reduce((a, b) => Math.max(a, b));
let start = 0;

while(start <= end){
    let mid = Math.floor((start + end) / 2);
    let summery = 0;

    for(let i = 0; i < testCase; i++){
        summery += data[i] - mid > 0 ? data[i] - mid : 0;
    }

    if(summery >= subject){
        start = mid + 1;
    }else{
        end = mid - 1;
    }
}

console.log(end);