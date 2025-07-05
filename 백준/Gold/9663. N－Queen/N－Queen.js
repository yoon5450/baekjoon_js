let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim()

let testCase = Number(input);
let board = [];
let current = [];
let cnt = 0;

// for (let i = 0; i < testCase; i++) {
//     let line = [];
//     for (let j = 0; j < testCase; j++) {
//         line.push(false);
//     }
//     board.push(line);
// }


function dfs(depth) {
    if (depth == testCase) {
        cnt++;
        return
    }

    //좌표평면에서 대각선 위치에 있다는 걸 어떻게 알까?
    //0,0 > 7,7 > 4,4 | 1,4 > 0,3 > 0,5 > 4,7? > 4,1? 그럼 7,도 대각선인가? 대각선
    //x좌표 - 놓으려는 x좌표 == y좌표 - 놓으려는 y좌표 그럼 4,7? 
    //i = y좌표 j = x좌표

    for (let j = 0; j < testCase; j++) {
        let cancelFlag = false;
        for (let x = 0; x < current.length; x++) {
            //대각선 확인
            if (Math.abs(current[x][0] - j) == Math.abs(current[x][1]-depth) || current[x][0] == j) {
                cancelFlag = true;
            }
        }
        if (cancelFlag) continue;
        current.push([j, depth]);
        dfs(depth + 1);
        current.pop();
    }

}

dfs(0);
console.log(cnt);