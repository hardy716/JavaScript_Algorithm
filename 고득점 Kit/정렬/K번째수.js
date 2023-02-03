/* https://school.programmers.co.kr/learn/courses/30/lessons/42748 */




/* redefine(재정의) */

// input1 : array(1차원 Array)
// input2 : commands([i,j,k]를 요소로 가지는 2차원 Array)
// return : command별 연산 결과가 담긴 1차원 Array

// condition1 : array 길이 : [1,100]
// condition2 : array 원소 값 : [1,100]
// condition3 : commands 길이 : [1,50]

// algorithm : 정렬(오름차순) : sort((a, b) => a - b)

// logic(psuedo) : 




/* solution(구현) */

function solution(array, commands) {
    let answer = [];
    for ([i, j, k] of commands) {
        segArray = array.slice(i - 1, j).sort((a, b) => a - b);    // 공간복잡도 O(n/2)
        answer.push(segArray[k - 1]);
    }
    return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.08ms, 33.4MB)




/* check(검증) - Big O Notation */

// time complexity  : O(n^3*logn)
// space complexity : O(n)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()