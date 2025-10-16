let fs = require("fs");
const { dirname } = require("path");
const { text } = require("stream/consumers");
const { brotliCompress } = require("zlib");
let path =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

const testCase = input.shift();
const data = input;
let base = data[0].split("");

data.forEach((item) => {
  for(let i = 0; i < base.length; i++){
    if(base[i] != item[i]) base[i] = "?";
  }
})

console.log(base.join(""))