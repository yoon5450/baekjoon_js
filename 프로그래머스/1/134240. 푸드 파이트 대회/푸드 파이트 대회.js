
// 음식 3종류 
// 그냥 배열에 한개씩 넣고 뒤집으면 되는 것 아닌가?
function solution(food) {
    var answer = '';
    const lines = [];    
    console.log(food)
    
    food.forEach((item, index) => {
        if(index === 0) return;
        
        const left = item;
        const cur = index.toString();
        
        for(let i = left; i >= 2; i = i - 2){
            lines.push(cur);
        }
    })
    
    answer = lines.join("") + "0" + lines.reverse().join("")
    
    return answer;
}