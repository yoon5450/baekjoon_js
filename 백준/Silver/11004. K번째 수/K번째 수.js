let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(path).toString().trim().split('\n')

let NK = input[0].toString().split(' ').map(Number);
let N = NK[0];
let K = NK[1]-1;
let data = input[1].toString().split(' ').map(Number);

data.sort((a, b) => a-b);

console.log(data[K]);