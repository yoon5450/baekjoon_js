function solution(sequence, k) {
    var answer = [0, 1000000];
    
    let summary = 0;
    let startIndex = 0;
    let cur = 0;
    
    while(startIndex < sequence.length){
        while(summary < k){
            summary += sequence[cur]
            cur++
        }
        
        if(summary === k){
            if(answer[1] - answer[0] > cur-1 - startIndex){
                answer = [startIndex, cur-1]
            }
        }
        
        summary -= sequence[startIndex]
        startIndex++
    }
    
    return answer;
}