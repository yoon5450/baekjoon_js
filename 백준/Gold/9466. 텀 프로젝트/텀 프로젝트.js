let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
const { brotliCompress } = require('zlib');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let flag = 0;
let n = Number(input[flag++]);

for (let i = 0; i < n; i++) {
    let m = Number(input[flag++]);
    let lines = input[flag++].split(' ').map(Number);
    lines.unshift(-1); // 1-based

    let visited = Array(m + 1).fill(false);
    let finished = Array(m + 1).fill(false);
    let inTeam = Array(m + 1).fill(false);
    let oddCount = 0;

    for (let j = 1; j <= m; j++) {
        if (!finished[j]) {
            dfs(j);
        }
    }

    for (let j = 1; j <= m; j++) {
        if (!inTeam[j]) {
            oddCount++;
        }
    }

    console.log(oddCount);

    function dfs(node) {
        visited[node] = true;
        let next = lines[node];

        if (!visited[next]) {
            dfs(next);
        } else if (!finished[next]) {
            let cur = next;
            while (cur !== node) {
                inTeam[cur] = true;
                cur = lines[cur];
            }
            inTeam[node] = true;
        }

        finished[node] = true;
    }
}
