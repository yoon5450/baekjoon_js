let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split(' ').map(Number);

let num = input[0];
let cnt = input[1];
let current = [];
let used = [];
let result = "";

for(let i = 0; i <= num; i++){
    used.push(false);
}

function recur(){
    if(current.length == cnt){
        for(let i = 0; i < current.length; i++){
            result += current[i] + " ";
        }
        result += "\n";
        return;
    }

    for(let i = 1; i <= num; i++){
        if(used[i]) continue;
        current.push(i);
        for(let j = 0; j <= i; j++){
            used[j] = true;
        }
        recur();
        current.pop();
        for(let j = 0; j <= i; j++){
            used[j] = false;
        }
    }
}

recur();
console.log(result);