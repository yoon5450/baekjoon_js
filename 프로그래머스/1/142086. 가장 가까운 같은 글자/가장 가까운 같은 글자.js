function solution(s) {
    var answer = [];
    let curPositionObj = {};
    sArr = s.split('');
    
    for(let i = 0; i < sArr.length; i++){
        if(curPositionObj[sArr[i]] == null) {
            curPositionObj[sArr[i]] = i;
            answer.push(-1);
        }
        else{
            answer.push(i-curPositionObj[sArr[i]]);
            curPositionObj[sArr[i]] = i
        }
    }
    
    return answer;
}