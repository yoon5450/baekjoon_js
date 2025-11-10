let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let TestCase = Number(input[0]);
let arr = input[1].split(' ').map(Number);

/*let min = 1000000;
let max = -1000000;

arr.forEach(element => {
    if(element < min){
        min = element;
    }
    if(element > max){
        max = element;
    }
});*/

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);