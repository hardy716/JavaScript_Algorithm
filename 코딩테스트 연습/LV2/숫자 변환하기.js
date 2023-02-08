/* https://school.programmers.co.kr/learn/courses/30/lessons/154538 */




/* redefine(재정의) */

// input : x, y, n (Number)
// return : 필요한 최소 연산 횟수(Number), 만들 수 없다면 -1

// condition1 : x, y : [1,1000000]
// condition2 : n : [1,y)

// algorithm : BFS & Set

// logic(psuedo) : 




/* solution(구현) */

function solution(x, y, n) {

    if (x === y) { return 0; }
    
    let cnt = 0;                               // 레벨 깊이
    let stack1 = [];                           // 레벨 별 노드를 담을 스택
    let visited = new Array(1000001).fill(0);  // 방문 배열 작성

    stack1.push(x);  // 시작 노드 세팅
    
    while (true) {
        cnt++;         
        let stack2 = [];
        
        while (stack1.length > 0) {    // 레벨 내 노드 유무 검사
            const num = stack1.pop();  // 부모 노드 세팅

            const n1 = num * 2;        // 자식 노드 세팅1
            const n2 = num * 3;        // 자식 노드 세팅2
            const n3 = num + n;        // 자식 노드 세팅3
            
            if (n1===y || n2===y || n3===y) { return cnt; }  // 
            
            if (n1 < y && visited[n1] === 0) {               // n1 < y && 방문X
                stack2.push(num * 2);                        // 임시 스택에 Push
                visited[n1] = 1;                             // 방문 표시
            }
            if (n2 < y && visited[n2] === 0) {               // n2 < y && 방문X
                stack2.push(num * 3);                        // 임시 스택에 Push
                visited[n2] = 1;                             // 방문 표시
            }
            if (n3 < y && visited[n3] === 0) {               // n3 < y && 방문X 
                stack2.push(num + n);                        // 임시 스택에 Push
                visited[n3] = 1;                             // 방문 표시
            }
        }
        if (stack2.length === 0) { return -1; }              // 불가능한 경우, -1 반환
        stack1.push(...stack2);                              // 다음 연산을 위해 push
    }
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (6.32ms, 41.2MB)
// 테스트 2 〉	통과 (6.73ms, 41.1MB)
// 테스트 3 〉	통과 (6.48ms, 41.1MB)
// 테스트 4 〉	통과 (6.65ms, 41.2MB)
// 테스트 5 〉	통과 (14.36ms, 46.3MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (18.54ms, 47MB)
// 테스트 8 〉	통과 (6.18ms, 41.3MB)
// 테스트 9 〉	    실패 (런타임 에러)
// 테스트 10 〉    실패 (런타임 에러)
// 테스트 11 〉 통과 (19.32ms, 48.3MB)
// 테스트 12 〉 통과 (6.08ms, 41.3MB)
// 테스트 13 〉 통과 (6.19ms, 41.1MB)
// 테스트 14 〉 통과 (7.17ms, 41.3MB)
// 테스트 15 〉 통과 (6.90ms, 41.3MB)
// 테스트 16 〉 통과 (6.42ms, 41.2MB)


/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()




/* improvements(개선점 - Set 활용) */

function solution(x, y, n) {
    
    if (x === y) { return 0; }
    
    let cnt = 0;            
    let numSet1 = new Set();
    numSet1.add(x);
    
    while(numSet1.size > 0) {
        if(numSet1.has(y)) { return cnt; }
        const numSet2 = new Set();
        for (const num of numSet1.values()) {
            if(num * 2 <= y) { numSet2.add(num * 2); }
            if(num * 3 <= y) { numSet2.add(num * 3); }
            if(num + n <= y) { numSet2.add(num + n); }
        }
        numSet1 = numSet2;
        cnt++;
    }
    return -1;
}


// 정확성
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	통과 (0.12ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.4MB)
// 테스트 5 〉	통과 (43.41ms, 52.2MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (45.59ms, 52.7MB)
// 테스트 8 〉	통과 (0.10ms, 33.4MB)
// 테스트 9 〉	통과 (248.04ms, 88.3MB)
// 테스트 10 〉 통과 (201.50ms, 88.1MB)
// 테스트 11 〉 통과 (61.75ms, 56.7MB)
// 테스트 12 〉 통과 (0.07ms, 33.4MB)
// 테스트 13 〉 통과 (0.07ms, 33.4MB)
// 테스트 14 〉 통과 (1.32ms, 34.1MB)
// 테스트 15 〉 통과 (0.23ms, 33.5MB)
// 테스트 16 〉 통과 (0.50ms, 33.7MB)


/* check(검증) - Big O Notation */

// m은 cnt의 최댓값

// time complexity  : O(3^m * n)
// while 루프에서는 각 레벨에서 만들어지는 새로운 숫자의 수가 O(3) 이고, 각 레벨은 O(n) 의 시간이 걸린다.

// space complexity : O(m)
// 각 레벨에서 새로운 숫자를 저장하기 위해 필요한 Set 개수