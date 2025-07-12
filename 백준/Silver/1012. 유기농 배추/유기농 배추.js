let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
const { brotliCompress } = require('zlib');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');


//현재 좌표 상태를 pass로 관리
let pass = 0
let testCase = Number(input[pass++]);
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function dfs(curX, curY, field, visited, x, y){
    if(visited[curX][curY]) return false;
    visited[curX][curY] = true;
    
    for(let i = 0; i < 4; i++){
        let nextX = curX + dx[i];
        let nextY = curY + dy[i];
        
        if(nextX >= 0 && nextX < x && nextY >= 0 && nextY < y && field[nextX][nextY] > 0){
            dfs(nextX, nextY, field, visited, x, y);
        }
    }
}

//주변에 연결되어 있는 기준 : 상하좌우 인접
//i 좌표 찾아가서 주변 것들 확인
for (let t = 0; t < testCase; t++) {
    let [x, y, cabbageCnt] = input[pass++].split(" ").map(Number);
    let visited = Array(x).fill(0).map(() => Array(y).fill(false));
    let field = Array(x).fill(0).map(() => Array(y).fill(0));
    let location = [];
    let a = 1;
    let cnt = 0;

    for(let i = pass; i < pass + cabbageCnt; i++){
        let cur = input[i].trim().split(" ").map(Number);
        location.push(cur);
        field[cur[0]][cur[1]] = a++;
    }
    pass += cabbageCnt;
    
    for(let i = 0; i < location.length; i++){
        if(!visited[location[i][0]][location[i][1]]){
            dfs(location[i][0], location[i][1], field, visited, x, y);
            cnt++;
        }
    }
    console.log(cnt);
}

