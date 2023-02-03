/* https://school.programmers.co.kr/learn/courses/30/lessons/42587 */




/* redefine(재정의) */

// input : priorities(문서의 중요도가 담긴 1차원 Array), location(인쇄를 요청한 문서의 위치 Number)
// return : 인쇄를 요청한 문서의 인쇄 순서(Number)

// condition1 : 중요도 : [1,9]
// condition2 : priorities 길이 : [1,100]

// algorithm : 큐

// logic(psuedo) : 




/* solution(구현) */

function solution(priorities, location) {
    let answer = 0;
    let flag = false;
    
    while(true) {
      	maxPriority = Math.max(...priorities);
        
        let priority = priorities.shift();
        
        (priority === maxPriority) 
        ? ((location === 0) ? flag = true : answer++)
        : priorities.push(priority)
        
        if (flag) return (answer + 1);
        
        (location > 0) ? location-- : location = priorities.length - 1
    }
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.15ms, 33.4MB)
// 테스트 2 〉	통과 (0.35ms, 33.5MB)
// 테스트 3 〉	통과 (0.18ms, 33.5MB)
// 테스트 4 〉	통과 (0.15ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.16ms, 33.5MB)
// 테스트 7 〉	통과 (0.16ms, 33.6MB)
// 테스트 8 〉	통과 (0.26ms, 33.5MB)
// 테스트 9 〉	통과 (0.14ms, 33.5MB)
// 테스트 10 〉 통과 (0.18ms, 33.4MB)
// 테스트 11 〉 통과 (0.24ms, 33.5MB)
// 테스트 12 〉 통과 (0.14ms, 33.5MB)
// 테스트 13 〉 통과 (0.23ms, 33.6MB)
// 테스트 14 〉 통과 (0.05ms, 33.4MB)
// 테스트 15 〉 통과 (0.06ms, 33.5MB)
// 테스트 16 〉 통과 (0.15ms, 33.4MB)
// 테스트 17 〉 통과 (0.30ms, 33.5MB)
// 테스트 18 〉 통과 (0.17ms, 33.5MB)
// 테스트 19 〉 통과 (0.37ms, 33.5MB)
// 테스트 20 〉 통과 (0.15ms, 33.4MB)


/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// space complexity : O(1)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()