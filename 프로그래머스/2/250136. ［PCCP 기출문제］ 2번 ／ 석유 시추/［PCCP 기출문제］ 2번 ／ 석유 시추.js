function solution(land) {
    const n = land.length;
    const m = land[0].length;

    const finished = Array.from({ length: n }, () => Array(m).fill(0));
    const groupToOil = new Map();
    const groupToCols = new Map();

    let groupId = 1;

    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    function dfs(y, x, id) {
        const stack = [[y, x]];
        let oil = 1;
        const cols = new Set();
        cols.add(x);
        finished[y][x] = id;

        while (stack.length > 0) {
            const [cy, cx] = stack.pop();

            for (let d = 0; d < 4; d++) {
                const ny = cy + dy[d];
                const nx = cx + dx[d];

                if (
                    ny >= 0 && ny < n &&
                    nx >= 0 && nx < m &&
                    land[ny][nx] === 1 &&
                    finished[ny][nx] === 0
                ) {
                    finished[ny][nx] = id;
                    cols.add(nx);
                    stack.push([ny, nx]);
                    oil++;
                }
            }
        }

        groupToOil.set(id, oil);
        groupToCols.set(id, cols);
    }

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (land[y][x] === 1 && finished[y][x] === 0) {
                dfs(y, x, groupId);
                groupId++;
            }
        }
    }

    let maxOil = 0;

    for (let col = 0; col < m; col++) {
        let total = 0;
        for (const [gid, cols] of groupToCols.entries()) {
            if (cols.has(col)) {
                total += groupToOil.get(gid);
            }
        }
        maxOil = Math.max(maxOil, total);
    }

    return maxOil;
}
