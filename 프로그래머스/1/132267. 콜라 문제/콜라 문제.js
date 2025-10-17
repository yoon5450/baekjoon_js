function solution(a, b, n) {
    //  빈병에서 초기에 받은 값
    var answer = Math.floor(n/a) * b;
    const empty = n - Math.floor(n/a) * a
    let filled = answer + empty;
    
    
    while(filled >= a){
        const cnt = Math.floor(filled / a)
        const received = cnt * b
        filled = filled - (cnt * a) + received
        answer += received
    }
    
    return answer;
}