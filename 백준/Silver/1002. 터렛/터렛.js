let fs = require("fs");
const { dirname } = require("path");
const { text } = require("stream/consumers");
const { brotliCompress } = require("zlib");
let path =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

const testCase = input.shift();
const data = input;

// 원으로 겹쳤을 때 겹선의 개수
// r = 반지름이라는 의미
// 반지름에 몇개나 겹치는지
data.forEach((item) => {
  const [x1, y1, r1, x2, y2, r2] = item.split(" ").map(Number);

  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);

  const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);

  if (x1 === x2 && y1 === y2) {
    if (r1 === r2) console.log(-1);
    else console.log(0);
  } else if (distance === r1 + r2) console.log(1);
  else if (distance === Math.abs(r1 - r2)) console.log(1);
  else if (distance < Math.abs(r1 - r2)) console.log(0);
  else if (distance < r1 + r2) console.log(2);
  else console.log(0);
});
