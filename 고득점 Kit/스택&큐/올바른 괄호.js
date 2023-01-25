/* https://school.programmers.co.kr/learn/courses/30/lessons/12909 */




/* redefine(재정의) */

// input : s( '(' , ')' 로만 이루어진 문자열 s)
// return : 괄호가 바르게 짝지었는지에 따른 boolean 값

// condition : s의 길이 : [1,100000]

// algorithm : 

// logic(psuedo) :
// 1. left < right가 된다면, return false
// 2. left/right 갱신이 끝난 후, left === right 조건을 만족하지 않으면, return false




/* solution(구현) */

function solution(s){
    let left = 0;   // 왼쪽 괄호('(')의 개수
    let right = 0;  // 오른쪽 괄호(')')의 개수

    for (let c of s) { 
        
        (c === '(') ? left++ : right++    // 괄호 모양에 따라 left, right 갱신

        if (left < right) return false;   // logic1 : left < right가 된다면, return false
    }    
    
    if (left === right) { return true } 
    else { return false }                 // logic2 : left === right 조건을 만족하지 않으면, return false
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
// 테스트 10 〉 통과 (0.07ms, 33.5MB)
// 테스트 11 〉 통과 (0.07ms, 33.4MB)
// 테스트 12 〉 통과 (0.13ms, 33.4MB)
// 테스트 13 〉 통과 (0.13ms, 33.4MB)
// 테스트 14 〉 통과 (0.13ms, 33.4MB)
// 테스트 15 〉 통과 (0.13ms, 33.4MB)
// 테스트 16 〉 통과 (0.13ms, 33.4MB)
// 테스트 17 〉 통과 (0.13ms, 33.4MB)
// 테스트 18 〉 통과 (0.14ms, 33.4MB)
// 효율성
// 테스트 1 〉	통과 (9.30ms, 38MB)
// 테스트 2 〉	통과 (5.40ms, 38.2MB)




/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(1)




/* improvements(개선점 - 가독성 향상) */

function solution(s){
    let left = 0
    let right = 0;

    for (let c of s) { 
        
        (c === '(') ? left++ : right++

        if (left < right) return false;
    }    
    
    return (left === right) ? true : false;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.5MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)
// 테스트 10 〉 통과 (0.07ms, 33.4MB)
// 테스트 11 〉 통과 (0.04ms, 33.5MB)
// 테스트 12 〉 통과 (0.16ms, 33.4MB)
// 테스트 13 〉 통과 (0.13ms, 33.4MB)
// 테스트 14 〉 통과 (0.14ms, 33.4MB)
// 테스트 15 〉 통과 (0.18ms, 33.6MB)
// 테스트 16 〉 통과 (0.14ms, 33.4MB)
// 테스트 17 〉 통과 (0.13ms, 33.4MB)
// 테스트 18 〉 통과 (0.19ms, 33.4MB)
// 효율성
// 테스트 1 〉	통과 (5.41ms, 38.4MB)
// 테스트 2 〉	통과 (6.65ms, 38.3MB)



/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(1)