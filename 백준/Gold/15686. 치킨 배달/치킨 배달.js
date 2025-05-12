let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
const { brotliCompress } = require('zlib');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

//치킨 거리
//폐업할 치킨집 조합을 골라야함.
//거리의 합이 가장 작은 값을 return
//백트래킹으로 조합을 고른다?
//아니 그럼 죄다 연산하나? 최소값 나올 때까지. 이상하잖아. ㅁㄹ 해보면 나오겠지
//2개 골라. total = Math.min(Math.abs(chickenCoordi[i][0] - ))일케하라고?

let flag = 0;
let [N, M] = input[flag++].trim().split(" ").map(Number);
let field = Array(N).fill(0).map(e => input[flag++].trim().split(" ").map(Number));
let chickenCoordi = [];
let homeCoordi = [];
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (field[i][j] === 2) {
            chickenCoordi.push([i + 1, j + 1]);//y, x 구조
        } else if (field[i][j] === 1)
        homeCoordi.push([i + 1, j + 1]);
    }
}

dfs(0, chickenCoordi, homeCoordi, []);
console.log(min);

function dfs(depth, chickenCoordi, homeCoordi, cur) {
    if (cur.length >= M) {
        let cDistance = 0;
        for (let i = 0; i < homeCoordi.length; i++) {
            let minC = 100000;
            for (let j = 0; j < cur.length; j++) {
                minC = Math.min(minC, Math.abs(homeCoordi[i][0] - cur[j][0]) + Math.abs(homeCoordi[i][1] - cur[j][1]));
            }
            cDistance += minC;
        }
        min = Math.min(min, Math.min(cDistance, min))
        return true;
    }

    //조건이 불가능하면 탈출시키는 방법 없나.
    //백트래킹에서 순서가 없도록 만들려면?
    for (let i = depth; i < chickenCoordi.length; i++) {
        if(M > chickenCoordi.length-i+cur.length) return;
        cur.push(chickenCoordi[i]);
        dfs(i + 1, chickenCoordi, homeCoordi , cur);
        cur.pop();
    }
}