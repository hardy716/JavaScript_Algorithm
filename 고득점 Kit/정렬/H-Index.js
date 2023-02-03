/* https://school.programmers.co.kr/learn/courses/30/lessons/42747 */




/* redefine(재정의) */

// input : citations(발표한 논문 n편의 인용 횟수를 담은 1차원 Array)
// return : H-Index

// condition1 : 논문의 수 N : [1, 1000]
// condition1 : 논문별 인용 횟수(citations[i]) : [1, 1000]

// algorithm : 정렬(내림차순) : sort((a,b) => b - a)




/* solution(구현) */

function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);    // 공간복잡도 O(n/2)    
    
    while (true) {
        if (citations[answer] >= Math.max(answer + 1, citations.length - answer)) {
            answer++;
        } else {
           return answer;
        }
    }
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.27ms, 33.4MB)
// 테스트 2 〉	통과 (0.35ms, 33.5MB)
// 테스트 3 〉	통과 (0.33ms, 33.6MB)
// 테스트 4 〉	통과 (0.32ms, 33.5MB)
// 테스트 5 〉	통과 (0.36ms, 33.3MB)
// 테스트 6 〉	통과 (0.39ms, 33.5MB)
// 테스트 7 〉	통과 (0.22ms, 33.5MB)
// 테스트 8 〉	통과 (0.14ms, 33.2MB)
// 테스트 9 〉	통과 (0.15ms, 33.5MB)
// 테스트 10 〉 통과 (0.24ms, 33.5MB)
// 테스트 11 〉 통과 (0.41ms, 33.5MB)
// 테스트 12 〉 통과 (0.16ms, 33.5MB)
// 테스트 13 〉 통과 (0.38ms, 33.4MB)
// 테스트 14 〉 통과 (0.36ms, 33.4MB)
// 테스트 15 〉 통과 (0.39ms, 33.5MB)
// 테스트 16 〉 통과 (0.05ms, 33.5MB)




/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(n/2)




/* improvements(개선점) - 가독성 개선 */

function solution(citations) {
    let answer = 0;
    let flag = true;
    
    citations.sort((a, b) => b - a);      
    
    while (flag) {   
        citations[answer] >= Math.max(answer + 1, citations.length - answer)
        ? answer++
        : flag = false
    }
    
    return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.27ms, 33.6MB)
// 테스트 2 〉	통과 (0.36ms, 33.5MB)
// 테스트 3 〉	통과 (0.39ms, 33.7MB)
// 테스트 4 〉	통과 (0.32ms, 33.5MB)
// 테스트 5 〉	통과 (0.36ms, 33.7MB)
// 테스트 6 〉	통과 (0.42ms, 33.5MB)
// 테스트 7 〉	통과 (0.22ms, 33.6MB)
// 테스트 8 〉	통과 (0.14ms, 33.6MB)
// 테스트 9 〉	통과 (0.16ms, 33.5MB)
// 테스트 10 〉 통과 (0.24ms, 33.6MB)
// 테스트 11 〉 통과 (0.42ms, 33.6MB)
// 테스트 12 〉 통과 (0.17ms, 33.6MB)
// 테스트 13 〉 통과 (0.41ms, 33.6MB)
// 테스트 14 〉 통과 (0.37ms, 33.6MB)
// 테스트 15 〉 통과 (0.39ms, 33.6MB)
// 테스트 16 〉 통과 (0.05ms, 33.5MB)




/* check(검증) - Big O Notation */

// time complexity  : O(nlogn)
// space complexity : O(1)