/* https://school.programmers.co.kr/learn/courses/30/lessons/1844 */




/* redefine(재정의) */

// input1 : maps(n * m 크기의 2차원 Array(Matrix)) 
// return : 목표지점에 도착하기 위해서 지나야 하는 칸의 개수(불가능하다면 -1) Number

// condition1 : map의 요소 : 0-벽, 1-칸
// condition2 : n과 m은 서로 다를 수 있으며, [1,100] (단 1X1은 제외)
// condition3 : 출발지점 (1,1) -> 목표지점(n,m)

// algorithm : BFS, Queue

// logic(psuedo) : 
// 1. 큐 자료구조 이용한 BFS 탐색
// 2. 인덱스 범위 유효/방문 여부 검사
// 3. 목표지점 도달 여부 검사
// 4. 다음 레벨 노드를 큐에 삽입
// 5. 목표지점에 도달할 수 없다면, -1 반환


/* solution(구현) */

function solution(maps) {

    const n = maps.length - 1;     // n(행)
    const m = maps[0].length - 1;  // m(열)

    const dx = [0, 0, -1, 1];      // 방향 설정
    const dy = [1, -1, 0, 0];      // 상/하/좌/우

    let route = [[0, 0]];           // route 세팅(Queue)

    while(route.length > 0) {                                     // BFS 시작                  
        
        for (let i = 0; i<route.length; i++) {                    // 동일 레벨 내 노드 탐색
            const [x, y] = route.pop();                           // 노드 설정
            
            for (let j=0; j<4; j++) {                             // 상/하/좌/우 탐색
                const nx = x + dx[j];                             // 다음 노드 x좌표 설정
                const ny = y + dy[j];                             // 다음 노드 y좌표 설정
                
                if (nx < 0 | nx > n | ny < 0 | ny > m) continue;  // 인덱스 범위 유효 검사(index range)
                if (maps[nx][ny] !== 1) continue;                 // 방문 여부 검사(visited)
                
                maps[nx][ny] = maps[x][y] + 1;                    // 방문하지 않았다면 +1
                
                if (nx === n && ny === m) return maps[nx][ny];    // 목표지점에 도달 여부 검사
                
                route.push([nx, ny]);                             // 다음 레벨 노드를 큐에 삽입
            }
        }
    }   
    return -1;  // 목표지점에 도달하지 못했다면, -1 반환
}


/* 결과 */
// 정확성  테스트
// 테스트 1 〉	통과 (0.21ms, 33.3MB)
// 테스트 2 〉	통과 (0.22ms, 33.3MB)
// 테스트 3 〉	통과 (0.21ms, 33.4MB)
// 테스트 4 〉	통과 (0.21ms, 33.4MB)
// 테스트 5 〉	통과 (0.21ms, 33.4MB)
// 테스트 6 〉	통과 (0.21ms, 33.4MB)
// 테스트 7 〉	통과 (0.36ms, 33.4MB)
// 테스트 8 〉	통과 (0.22ms, 33.5MB)
// 테스트 9 〉	통과 (0.22ms, 33.4MB)
// 테스트 10 〉 통과 (0.22ms, 33.5MB)
// 테스트 11 〉 통과 (0.21ms, 33.4MB)
// 테스트 12 〉 통과 (0.20ms, 33.4MB)
// 테스트 13 〉 통과 (0.21ms, 33.4MB)
// 테스트 14 〉 통과 (0.21ms, 33.4MB)
// 테스트 15 〉 통과 (0.22ms, 33.4MB)
// 테스트 16 〉 통과 (0.19ms, 33.4MB)
// 테스트 17 〉 통과 (0.22ms, 33.4MB)
// 테스트 18 〉 통과 (0.09ms, 33.4MB)
// 테스트 19 〉 통과 (0.08ms, 33.3MB)
// 테스트 20 〉 통과 (0.08ms, 33.3MB)
// 테스트 21 〉통과 (0.08ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (37.53ms, 37.4MB)
// 테스트 2 〉	통과 (4.94ms, 37.3MB)
// 테스트 3 〉	통과 (41.64ms, 37.5MB)
// 테스트 4 〉	통과 (31.12ms, 37.1MB)




/* check(검증) - Big O Notation */

// time complexity  : O(nm)
// 인덱스 범위 유효/방문 여부 검사를 통해 각 노드를 최대 한 번씩만 탐색하기 때문

// space complexity : O(min(n, m))
// BFS에 사용되는 큐의 길이 <= min(n,m)

/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()
