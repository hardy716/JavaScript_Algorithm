/* 문제 링크 */




/* https://school.programmers.co.kr/learn/courses/30/lessons/131130 */

// input : cards : number[]
// return : 게임 내 얻을 수 있는 최고 점수 : number

// condition1 : cards 길이 : [2, 100]
// condition2 : cards 요소 : [1, cards.length]

// algorithm : closed graph

// logic(psuedo) : 




/* solution(구현) */

function solution(cards) {
    let group = [];                                     // 각 그룹에 속하는 상자 수 저장                   
    let visited = new Array(cards.length).fill(false);  // 노드 방문 여부 저장
    
    for (let i=0; i<cards.length; i++) {
        if (visited[i]===true) continue;  // 방문한 노드라면 continue
        
        let cnt = 0;                      // 상자 수
        let idx = i;                      // 노드 번호
        
        while (visited[idx]===false) {    // 닫힌 그래프 내 방문 처리가 안된 노드들 순회
            visited[idx] = true;          // 방문 처리
            cnt++;                        // 상자 수++
            idx = cards[idx] - 1;         // 다음 노드 설정
        }
        group.push(cnt);                  // group별 cnt push
    }
    
    group.sort((a, b)=> a - b);           // group 오름차순 정렬
    
    return (group.length === 1) 
        ? 0                                              // 최종 그룹 개수가 1개인 경우
        : group[group.length-1] * group[group.length-2]  // 최대 점수
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.4MB)
// 테스트 3 〉	통과 (0.16ms, 33.4MB)
// 테스트 4 〉	통과 (0.16ms, 33.5MB)
// 테스트 5 〉	통과 (0.15ms, 33.5MB)
// 테스트 6 〉	통과 (0.16ms, 33.6MB)
// 테스트 7 〉	통과 (0.17ms, 33.4MB)
// 테스트 8 〉	통과 (0.18ms, 33.4MB)
// 테스트 9 〉	통과 (0.16ms, 33.5MB)
// 테스트 10 〉 통과 (0.17ms, 33.4MB)


/* check(검증) - Big O Notation */

// time complexity  : O(nlogn)
// space complexity : O(n)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()