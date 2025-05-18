let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
const { brotliCompress } = require('zlib');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);
let field = [];
let visit = Array(n).fill(0).map((e) => Array(n).fill(false));
let areaCnt = 0;
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
let vision = {"R" : 0, "G" : 1, "B" : 2};
let result = "";

//적록색약의 경우에는 R-G를 같은 색상으로 인식함
for(let i = 1; i <= n; i++){
    field.push(input[i].trim().split(""));
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(!visit[i][j]) {
            dfs(0, field, [i, j]);
            areaCnt++;
        };
    }
}

result += areaCnt;
vision.G = 0;
areaCnt = 0;
visit = Array(n).fill(0).map((e) => Array(n).fill(false));

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(!visit[i][j]) {
            dfs(0, field, [i, j]);
            areaCnt++;
        };
    }
}

result += " " + areaCnt;
console.log(result);

function dfs(depth, field, cur){
    let [y, x] = cur;
    if(visit[y][x]) return;
    visit[y][x] = true;
    let color = field[y][x];

    for(let i = 0; i < 4; i++){
        let mx, my;
        mx = x + dx[i];
        my = y + dy[i];
        if(mx >= 0 && mx < n && my >= 0 && my < n && vision[field[my][mx]] === vision[color]){
            dfs(depth + 1, field, [my, mx]);
        }
    }
}