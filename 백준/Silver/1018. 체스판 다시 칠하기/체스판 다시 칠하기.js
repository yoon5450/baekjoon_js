let fs = require("fs");
const { dirname } = require("path");
let path =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let [y, x] = input.shift().split(" ");
let board = input.map((el) => el.split(""));
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < y - 7; i++) {
  for (let j = 0; j < x - 7; j++) {
    min = Math.min(min, calcPaint(j, i));
  }
}

console.log(min);

function calcPaint(x, y) {
  //bwbwbw와 wbwbwb
  let wCount = 0;
  let bCount = 0;

  for (let i = 0; i < 8; i++) {
    let cur = i % 2;

    for (let j = 0; j < 8; j++) {
      if (cur === 0) {
        if (j % 2 === 0) {
          // 홀 (반대긴해 ㅋㅋ)
          if (board[y + i][x + j] === "B") {
            bCount++;
          } else wCount++;
        } else {
          // 짝
          if (board[y + i][x + j] === "W") {
            bCount++;
          } else wCount++;
        }
      } else {
        if (j % 2 === 0) {
          // 홀 (반대긴해 ㅋㅋ)
          if (board[y + i][x + j] === "B") {
            wCount++;
          } else bCount++;
        } else {
          // 짝
          if (board[y + i][x + j] === "W") {
            wCount++;
          } else bCount++;
        }
      }
    }
  }

    return Math.min(wCount, bCount);
}
