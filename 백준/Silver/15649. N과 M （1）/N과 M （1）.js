let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split(' ').map(Number);

let [n, m] = [input[0], input[1]];
let current = []
let cur = 0;
let used = [];
//재귀의 기본 : escape point, push, pop

for(let i = 0; i <= n; i++){
    used.push(false);
}

function recur(x){
    //escape
    if(current.length == m){
        console.log(current.join(" "));
        return 0;
    }

    for(let i = 1; i <= n; i++){
        if(used[i]) continue;
        used[i] = true;
        current.push(i);
        recur(i)
        used[i] = false
        current.pop(i);
    }
}

recur();