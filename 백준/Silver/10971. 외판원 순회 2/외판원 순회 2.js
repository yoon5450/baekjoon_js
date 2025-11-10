let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let testCase = Number(input[0]);
let routes = [];
let current = [];
let visited = [];
let min = Number.MAX_SAFE_INTEGER;

for(let i = 1; i < input.length; i++){
    routes.push(input[i].trim().split(' ').map(Number));
}

for(let i = 0; i < testCase; i++){
    visited.push(false);
}

// 외판원 순회
// 방문한 지역으로 재방문 x, 마지막으로 시작한 지점으로 돌아와야만 함.
function dfs(){
    if (current.length === testCase) {    
        let summery = 0;
        current.push(current[0]);
        for (let i = 0; i < testCase; i++) {
            if (routes[current[i]][current[i + 1]] == 0) 
                summery += 100000;
            summery += routes[current[i]][current[i + 1]];
        }
        current.pop();
        
        if (summery < min) {
            min = summery;
        }       
        return;
    }


    for(let i = 0; i < testCase; i++){
        if(visited[i]) continue;
        visited[i] = true;
        current.push(i);
        dfs();
        visited[i] = false;
        current.pop();
    }
}

dfs();
console.log(min);