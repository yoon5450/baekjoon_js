let fs = require("fs");
const { dirname } = require("path");
const { text } = require("stream/consumers");
const { brotliCompress } = require("zlib");
let path =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let N = Number(input[0]);
let numArr = input[1].split(" ").map(Number);
let visit = Array(N).fill(false);
let result = [];
let max = Number.MIN_SAFE_INTEGER;

dfs()
console.log(max);

function dfs() {
  if (result.length === N) {
    let resultValue = 0;

    for (let i = 0; i < N-1; i++) {
      resultValue += Math.abs(result[i] - (result[i+1] | 0));
    }
    // console.log(resultValue);
    max = Math.max(max, resultValue);

    return
  }

  for (let i = 0; i < N; i++) {
    if(visit[i]) continue;
    result.push(numArr[i]);
    visit[i] = true;
    dfs();
    visit[i] = false;
    result.pop();
  }
}
