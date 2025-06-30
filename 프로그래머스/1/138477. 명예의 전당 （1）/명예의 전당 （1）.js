function solution(k, score) {
    var answer = [];
    let sortArr = []
    
    for(let i = 0; i < score.length; i++){
        sortArr.push(score[i]);
        sortArr.sort((a, b) => b - a)
        if(sortArr.length > k) {
            sortArr.pop();
        }
        answer.push(sortArr[sortArr.length - 1]);
    }
    
    
    return answer;
}