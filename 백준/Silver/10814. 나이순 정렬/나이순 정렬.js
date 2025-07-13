let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let testCase = Number(input[0]);
let output = "";
let customerList = new Array();

for(let i = 1; i <= testCase; i++){
    customerList.push(input[i].trim().split(' '));
}

customerList.sort((a,b) => {
    if(a[0] != b[0]) return parseInt(a[0])-parseInt(b[0]);
    else return 0;
})

for(custoI of customerList){
    output += custoI[0] + " " + custoI[1] + "\n";
}

console.log(output);