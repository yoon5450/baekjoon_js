let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(path).toString().trim().split(' ');

let cur = Number(input[0]);
let subject = Number(input[1]);
let operCount = 0;

for(subject; subject > cur;){
    if(subject%10 == '1'){
        subject = Math.floor(Number(subject)/10).toString();
        operCount++;
    }else{
        subject = subject/2;
        operCount++;
    }
}operCount++;

if(subject != cur){
    operCount = -1
}

console.log(operCount)

//A) *10)+1 연산, B) *2 연산이 가능