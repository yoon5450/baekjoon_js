let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n').map(Number);

let testCase = input[0];
input.shift();
let rawData = input;
let pibo = [1, 1];
let max = 0;

for(let i = 0; i < testCase; i++){
    if(rawData[i] > max){
        max = rawData[i];
    }
}

for(let i = 0; pibo[i]+pibo[i + 1] <= max ;i++){
    pibo.push(pibo[i] + pibo[i+1]);
}

for(let i = 0; i < testCase; i++){
    let output = "";
    let cur = rawData[i];
    for(let i = pibo.length - 1; i > 0 ; i--){
        if(cur >= pibo[i]){
            cur -= pibo[i];
            output = pibo[i] + " " + output;
        }
    }
    console.log(output);
}