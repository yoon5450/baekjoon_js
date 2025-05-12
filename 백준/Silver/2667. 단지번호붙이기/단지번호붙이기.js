let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
const { brotliCompress } = require('zlib');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

//정사각형 필드
let n = Number(input[0]);
let field = [];
let groupCnt = 0;
let groupMem = 0
let groupMemArr =[];
let visited = Array(n).fill(0).map(e => Array(n).fill(false));
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

for(let i = 1; i <= n; i++){
    field.push(input[i].trim().split('').map(Number));
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(field[i][j] === 1){
            if(dfs(0, [i, j])){
                groupCnt++;
                groupMemArr.push(groupMem);
                groupMem = 0;
            }
        }
    }
}

console.log(groupCnt);
groupMemArr.sort((a, b) => a-b);
groupMemArr.forEach(e => {
    console.log(e);
});

function dfs(depth, cur){
    if(visited[cur[0]][cur[1]]) return false;
    visited[cur[0]][cur[1]] = true;
    groupMem++;
    
    for(let i = 0; i < 4; i++){
        let y = cur[0];
        let x = cur[1];
        x += dx[i];
        y += dy[i];
        if(x >= 0 && x < n && y >= 0 && y < n && field[y][x] === 1){
            dfs(depth + 1, [y, x]);
        }
    }

    return true
}