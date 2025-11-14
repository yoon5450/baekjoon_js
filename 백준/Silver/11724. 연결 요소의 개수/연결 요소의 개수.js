let fs = require("fs");
const { dirname } = require("path");
const { resourceUsage } = require("process");
const { text } = require("stream/consumers");
const { brotliCompress } = require("zlib");
let path =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

// 노드 출발점을 선언
// 해당 노드 출발점에서 출발했을 때 방문한 것들(연결된 것) 방문여부 TRUE
// 끝점까지 카운트
const [N, M] = input[0].trim().split(" ").map(Number);
let graph = new Array(N + 1).fill(0).map(() => []);
let visit = new Array(N + 1).fill(false);
let result = 0;

// 연결된 점 데이터를 가지고 있도록 가공
for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].trim().split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

// 단순한 dfs
function dfs(graph, visit, cur) {
  if (visit[cur]) return;
  visit[cur] = true;

  graph[cur].forEach((con) => {
    dfs(graph, visit, con);
  });
}

for (let i = 1; i < N + 1; i++) {
  if (!visit[i]) {
    result++;
    dfs(graph, visit, i);
  }
}

console.log(result)
