let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

function toUpperBound(start, end, subject, data){
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(subject >= data[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return end;
}

function toLowerBound(start, end, subject, data){
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(subject > data[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return end + 1;
}

let caseHas = Number(input[0]);
let dataHas = input[1].split(' ').map(Number);
let caseFind = Number(input[2])
let dataFind = input[3].split(' ').map(Number);
let result = "";

dataHas.sort((a, b) => a-b);

for(let i = 0; i < caseFind; i++){
    result += toUpperBound(0, caseHas-1, dataFind[i], dataHas) - toLowerBound(0, caseHas-1, dataFind[i], dataHas) + 1 + " ";
}

console.log(result);

//upper - lower;