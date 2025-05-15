function solution(wallpaper) {
    var answer = [];
    //파일들 중에 [가장 낮은 y값, 가장 낮은 y값]에서 
    //[가장 높은 y값, x값 가장 높은 x값] 으로 이동
    let wallpaperArr = wallpaper.map(e => e.split(""));
    let [minY, minX, maxY, maxX] = [51, 51, 0, 0];
    for(let i = 0; i < wallpaperArr.length; i++){
        for(let j = 0; j < wallpaperArr[0].length; j++){
            if(wallpaperArr[i][j] === "#"){
                minY = Math.min(minY, i);
                minX = Math.min(minX, j);
                maxY = Math.max(maxY, i+1);
                maxX = Math.max(maxX, j+1);
            }
        }
    }
    
    answer = [minY ,minX, maxY, maxX];
    return answer;
}