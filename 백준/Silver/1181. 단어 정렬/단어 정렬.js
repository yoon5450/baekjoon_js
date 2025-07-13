let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(path).toString().trim().split('\n')


function compare(dataA, dataB){
    if(dataA.length != dataB.length) return dataA.length-dataB.length;
    else{
        if(dataA > dataB) return 1;
        else if(dataA < dataB) return -1;
        else return 0;
    }
}

let testCase = Number(input[0]);
input.shift();
let output = "";
let setData = new Set(input);
input = [...setData];

input.sort(compare);

for(let i = 0; i < input.length; i++){
    output += input[i] + '\n';
}

console.log(output);