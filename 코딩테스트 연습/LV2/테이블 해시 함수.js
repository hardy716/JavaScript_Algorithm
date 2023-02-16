/* https://school.programmers.co.kr/learn/courses/30/lessons/147354 */




/* redefine(재정의) */

// input1 : data : number 타입인 컬럼들(튜플)로 이루어진 테이블
// input2 : col(number)
// input3 : row_begin(number)
// input4 : row_end(number)
// return : 테이블의 해시 값(number)

// condition1 : 1-index 기준
// condition2 : data 길이 : [1, 2500]
// condition3 : data의 원소 길이 : [1, 500]
// condition4 : data[i][j] : [1, 1000000]
// condition5 : col : [1, data의 원소의 길이]
// condition6 : 1 <= row_begin <= row_end <= data의 길이
// condition7 : 튜플의 첫번째 값은 기본키이므로 중복 x

// algorithm : 다중 조건 정렬, bittwise XOR

// logic(psuedo) : 
// 1. 다중 조건 정렬(|| 연산자 사용)
// 2. S_i를 갱신하면서 answer 갱신(^)


/* solution(구현) */

function solution(data, col, row_begin, row_end) {
    let answer = 0;
    let sum = 0;
    
    data.sort((a, b) => a[col-1] - b[col-1] || b[0] - a[0])  // 다중 조건 정렬을 위해 || 연산자 이용
    
    for (let i=row_begin-1; i<row_end; i++) {
        sum = 0;
        data[i].forEach(el => sum += el%(i+1));              // S_i 갱신
        answer = answer ^ sum;                               // bitwise XOR
    }
    
    return answer;
}


/* 참고 링크 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.24ms, 33.4MB)
// 테스트 2 〉	통과 (0.21ms, 33.6MB)
// 테스트 3 〉	통과 (0.21ms, 33.6MB)
// 테스트 4 〉	통과 (0.23ms, 33.7MB)
// 테스트 5 〉	통과 (0.99ms, 37.2MB)
// 테스트 6 〉	통과 (11.42ms, 83.3MB)
// 테스트 7 〉	통과 (7.84ms, 89.1MB)
// 테스트 8 〉	통과 (9.93ms, 88.7MB)
// 테스트 9 〉	통과 (11.10ms, 89.1MB)
// 테스트 10 〉 통과 (11.81ms, 88.5MB)
// 테스트 11 〉 통과 (0.07ms, 33.5MB)


/* check(검증) - Big O Notation */

// time complexity  : O(n*m)
// O(nlogn + (row_end - row_begin + 1) * m)에서 row_end - row_begin + 1의 최대 크기가 n이므로.

// space complexity : O()




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()