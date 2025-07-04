let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
const { brotliCompress } = require('zlib');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let k = Number(input[0]);
let data = input[1].split(" ");
let used = [];
let current = []
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= 9; i++) {
    used.push(false);
}

//eval 안쓰고 해보자
function contact(i, len) {
    //data[-1]은 없으므로 자동으로 체크
    let bu = data[len - 1] || " ";
    let flag;
    if (bu == ">") {
        if (current[len - 1] > i) {
            flag = true;
        } else {
            flag = false;
        }
    } else if (bu == "<") {
        if (current[len - 1] < i) {
            flag = true;
        } else {
            flag = false;
        }
    } else {
        flag = true;
    }

    return flag;
}

function recur(depth) {
    if (depth > k) {
        let nums = current.join("");
        if (max < Number(nums)) {
            max = nums;
        }

        if (min > Number(nums)) {
            min = nums;
        }
        return
    }

    for (let i = 0; i <= 9; i++) {
        if (used[i] || !contact(i, current.length)) continue;
        used[i] = true;
        current.push(i);
        recur(depth + 1);
        current.pop();
        used[i] = false;
    }
}

recur(0);
console.log(max);
console.log(min);
