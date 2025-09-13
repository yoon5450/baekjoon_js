let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split(' ').map(Number);

let N = input[0];
let K = input[1];

let summery = K * (1+K) / 2;

if(N >= summery){
    console.log((N-summery) % K == 0 ? K-1 : K);
}else console.log("-1");