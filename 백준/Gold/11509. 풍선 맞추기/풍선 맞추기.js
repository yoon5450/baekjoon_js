let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let N = Number(input[0]);
let heights = input[1].split(' ').map(Number);
let arrows = new Map();
let shootCount = 0;

for (let h of heights) {
    if (arrows.get(h)) {
        arrows.set(h, arrows.get(h) - 1);
    } else {
        shootCount++;
    }
    arrows.set(h - 1, (arrows.get(h - 1) || 0) + 1);
}

console.log(shootCount);