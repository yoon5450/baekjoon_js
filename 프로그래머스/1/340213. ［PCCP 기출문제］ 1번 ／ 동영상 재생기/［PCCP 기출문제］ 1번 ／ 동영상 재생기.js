function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let [m, s] = pos.split(":").map(Number);
    let [opStartM, opStartS] = op_start.split(":").map(Number);
    let [opEndM, opEndS] = op_end.split(":").map(Number);
    let [maxM, maxS] = video_len.split(":").map(Number);

    let totalStart = (opStartM * 60) + opStartS;
    let totalCur = (m * 60) + s;
    let totalEnd = (opEndM * 60) + opEndS;
    let maxLen = (maxM * 60) + maxS;

    if (totalStart <= totalCur && totalCur <= totalEnd) {
        totalCur = totalEnd;
    }

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === "next") {
            totalCur += 10;
        } else {
            totalCur -= 10;
        }
        
        if (totalCur < 0) totalCur = 0;
        if (totalCur > maxLen) totalCur = maxLen;

        if (totalStart <= totalCur && totalCur <= totalEnd) {
            totalCur = totalEnd;
        }
    }

    answer = String(Math.floor(totalCur / 60)).padStart(2, "0") 
            + ":" + String(totalCur % 60).padStart(2, "0");

    return answer;
}
