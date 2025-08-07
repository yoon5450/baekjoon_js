let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let testCase = Number(input[0]);
input.shift()

for(let i = 0; i < testCase; i++){
    let data = input[i].split(' ').map(Number);
    let testCase2 = Number(data[0]);
    data.shift();

    let dataAvg = data.reduce((a, b) => a + b) / testCase2;
    let esCount = 0;

    for(let j = 0; j < testCase2; j++){
        if(dataAvg < data[j]){
            esCount++;
        }
    }
    console.log((esCount / testCase2 * 100).toFixed(3)+ "\%");
}