/* https://school.programmers.co.kr/learn/courses/30/lessons/154540 */




/* redefine(재정의) */

// input1 : maps(각 행의 식량정보(String)를 요소로 갖는 1차원 Array)
// return : 각 섬에서 머무를 수 있는 최대 일수(Number)를 담은 1차원 Array

// condition1 : maps의 행, 열 크기(서로 다를 수 있음) : [3,100]
// condition2 : maps[i]는 'X' 또는 [1, 9]
// condition3 : 섬이 없다면 -1 반환

// algorithm : BFS, Queue

// logic(psuedo) :
// 1. 섬 노드인 경우만 BFS 진행
// 2. 큐에 출발 노드 삽입
// 3. 방문/섬/인덱스 범위 유효 여부 검사하면 BFS 진행
// 4. BFS 완료 후, 식량 여부 검사(있다면 반환 값 갱신)
// 5. 예외 처리(섬이 하나도 없는 경우) 및 반환 값 조건 만족



/* solution(구현) */

function solution(maps) {
    
    let days = [];                                 // 반환 값 세팅

    const n = maps.length;                         // n(행)
    const m = maps[0].length;                      // m(열)

    const dx = [0, 0, -1, 1];                      // 방향 설정
    const dy = [1, -1, 0, 0];                      // 상/하/좌/우
    
    let visited = new Array(n*m).fill(false);      // 방문 배열(false)

    
    for (let i=0; i<n; i++) {                      // 모든 노드 탐색                  
        for (let j=0; j<m; j++) {
            if (maps[i][j] === "X") { continue; }  // 섬 여부 검사("X": 바다)
            
            let route = [[i, j]];                  // route 세팅(Queue)
            let cnt = 0;                           // 식량 수(총계) 초기화          

            
            while(route.length > 0) {                                   // BFS 시작   

                const [x, y] = route.shift();                           // 노드 설정
    
                if (visited[x * m + y] === true) continue;              // 방문 여부 검사
                visited[x * m + y] = true;                              // 방문 처리
                
                cnt = Number(cnt) + Number(maps[x][y]);                 // 식량 수(총계) 갱신
                
                
                for (let j=0; j<4; j++) {                               // 상/하/좌/우 탐색
                    const nx = x + dx[j];                               // 다음 노드 x좌표 설정
                    const ny = y + dy[j];                               // 다음 노드 y좌표 설정
                    
                    if (nx < 0 | nx >= n | ny < 0 | ny >= m) continue;  // 인덱스 범위 유효 검사(index range)
                    if (maps[nx][ny] === 'X') continue;                 // 섬 여부 검사("X": 바다)
                    
                    route.push([nx, ny]);                               // 다음 레벨 노드를 큐에 삽입
                }

            }

            if (cnt > 0) {days.push(cnt)}                               // 식량 여부 검사, 있다면 push
        }           
    }

    // (섬이 있다면) ? 오름차순 정렬된 days 반환 : [-1] 반환
    return (days.length > 0) ? days.sort((a,b) => a-b) : [-1];
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.14ms, 33.6MB)
// 테스트 2 〉	통과 (0.25ms, 33.6MB)
// 테스트 3 〉	통과 (0.30ms, 33.5MB)
// 테스트 4 〉	통과 (0.38ms, 33.5MB)
// 테스트 5 〉	통과 (1.33ms, 34MB)
// 테스트 6 〉	통과 (1.95ms, 34.3MB)
// 테스트 7 〉	통과 (1.18ms, 33.9MB)
// 테스트 8 〉	통과 (3.27ms, 34.6MB)
// 테스트 9 〉	통과 (9.70ms, 38.2MB)
// 테스트 10 〉 통과 (4.83ms, 37.4MB)
// 테스트 11 〉 통과 (4.71ms, 37.4MB)
// 테스트 12 〉 통과 (10.86ms, 38.4MB)
// 테스트 13 〉 통과 (10.69ms, 38.5MB)
// 테스트 14 〉 통과 (18.53ms, 38.7MB)
// 테스트 15 〉 통과 (18.41ms, 38.7MB)
// 테스트 16 〉 통과 (18.67ms, 38.8MB)
// 테스트 17 〉 통과 (0.59ms, 33.7MB)
// 테스트 18 〉 통과 (18.61ms, 38.8MB)
// 테스트 19 〉 통과 (18.75ms, 38.8MB)
// 테스트 20 〉 통과 (0.77ms, 33.6MB)
// 테스트 21 〉 통과 (0.71ms, 33.7MB)
// 테스트 22 〉 통과 (0.31ms, 33.5MB)
// 테스트 23 〉 통과 (9.82ms, 38.4MB)
// 테스트 24 〉 통과 (10.82ms, 38.6MB)
// 테스트 25 〉 통과 (0.42ms, 33.6MB)


/* check(검증) - Big O Notation */

// time complexity  : O(NM)
// 모든 노드(NxM 크기)를 탐색하므로

// space complexity : O(NM)
// visited 배열 크기(NxM)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()