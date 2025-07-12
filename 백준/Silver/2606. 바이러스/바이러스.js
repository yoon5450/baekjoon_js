let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
const { brotliCompress } = require('zlib');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let computerCnt = Number(input[0]);
let lines = Number(input[1]);
let data = [[]];
let dataReal = []
let used = Array(computerCnt + 1).fill(false);
let current = [];
let cnt = 0;

//아 진짜 이상한데,, ㅋㅋ
for(let i = 0; i <= computerCnt; i++){
    dataReal.push([]);
}

for(let i = 2; i < input.length; i++){
    data.push(input[i].trim().split(" ").map(Number));
}

for(let i = 1; i < data.length; i++){
    dataReal[data[i][0]].push(data[i][1]);
    dataReal[data[i][1]].push(data[i][0]);
}

function dfs(depth, cur){
    used[cur] = true;
    cnt++
    for(x of dataReal[cur]){
        if(!used[x]) dfs(depth + 1, x);
    }
}

dfs(0, 1);
console.log(cnt-1);