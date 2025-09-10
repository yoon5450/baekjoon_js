let fs = require('fs');
const { dirname } = require('path');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let testCase = Number(input[0]);
let data = [];
let cur = [];
let meetCount = 1; 
//정렬된 배열에서 가장 작은 값을 자동으로 사용.

//nlogn 알고리즘
for(let i = 1; i <= testCase; i++){
    data.push(input[i].split(' ').map(Number));
}

data.sort((a,b) => {
    if(a[1] == b[1])
        return a[0]-b[0];
    else 
        return a[1]-b[1];
});
cur = data[0];

for(let i = 1; i < testCase; i++){
    if(cur[1] <= data[i][0]){
        meetCount++;
        cur = data[i];
    }
}

console.log(meetCount);
//대기시간도 회의시간으로 잡고 계산해보자