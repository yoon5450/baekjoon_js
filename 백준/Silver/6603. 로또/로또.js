let fs = require('fs');
const { dirname } = require('path');
const { text } = require('stream/consumers');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let current = [];
let used = [];
let min = 1000000;
let nums = [];
let result = "";

function recur(nums, start, depth){
    if(depth >= 6){
        for(let i = 0; i < current.length; i++){
            result += current[i] + " ";
        }
        result += "\n";
        return;
    }

    for(let i = start; i < nums.length; i++){
        if(used[i]) continue;
        used[i] = true
        current.push(nums[i]);
        recur(nums, i + 1, depth + 1);
        current.pop();
        used[i] = false;
    }
}



for(let i = 0; i < input.length-1; i++){
    let num = input[i].trim().replaceAll('\r', "").split(' ');
    used = [];
    current = [];
    nums = [];
    result = "";

    for(let j = 1; j < num.length; j++)
        nums.push(num[j]);

    for(let j = 0; j < num.length-1; j++)
        used.push(false);

    recur(nums, 0, 0);
    console.log(result);
}