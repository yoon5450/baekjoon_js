let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split(' ').map(Number);

let num = input[0];
let cnt = input[1];
let current = [];
let result = "";

function recur(){
    if(current.length == cnt){
        for(let i = 0; i < current.length; i++){
            result += current[i] + " ";
        }
        result += "\n";
        return;
    }

    for(let i = 1; i <= num; i++){
        current.push(i);
        recur();
        current.pop();
    }
}

recur();
console.log(result);