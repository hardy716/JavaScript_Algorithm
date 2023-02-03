/* https://school.programmers.co.kr/learn/courses/30/lessons/42746 */




/* redefine(재정의) */

// input : numbers(0 또는 양의 정수가 담긴 1차원 Array)
// return : 순서 재배치 결과, 가장 큰 수(String)

// condition1 : numbers 길이 : [1,100000]
// condition2 : numbers 원소 값 : [1,1000]

// algorithm : 정렬(비교연산 - 내림차순) : sort((n1, n2) => (n2 + n1) - (n1 + n2))

// logic(psuedo) : 
// 1. numbers 원소 타입을 문자열로 형변환
// 2. (n2+n1) (n1+n2) 비교 연산을 적용한 내림차순 정렬
// 3. 배열을 문자열로 변환(join)
// 4. 예외 처리("00...0" -> "0")




/* solution(구현) */

function solution(numbers) {
    let answer = numbers
        .map((num) => String(num))
        .sort((n1, n2) => (n2 + n1) - (n1 + n2))    // 공간복잡도 O(n/2)
        .join('');

    return Number(answer) === 0 ? '0' : answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (134.70ms, 42.9MB)
// 테스트 2 〉	통과 (63.72ms, 42.1MB)
// 테스트 3 〉	통과 (169.54ms, 44.9MB)
// 테스트 4 〉	통과 (24.57ms, 37.1MB)
// 테스트 5 〉	통과 (104.43ms, 44.7MB)
// 테스트 6 〉	통과 (91.92ms, 44MB)
// 테스트 7 〉	통과 (0.14ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.6MB)
// 테스트 9 〉	통과 (0.13ms, 33.4MB)
// 테스트 10 〉 통과 (0.13ms, 33.4MB)
// 테스트 11 〉 통과 (0.15ms, 33.4MB)
// 테스트 12 〉 통과 (0.06ms, 33.4MB)
// 테스트 13 〉 통과 (0.06ms, 33.5MB)
// 테스트 14 〉 통과 (0.06ms, 33.4MB)
// 테스트 15 〉 통과 (0.06ms, 33.4MB)




/* check(검증) - Big O Notation */

// time complexity  : O(n^3*logn)
// space complexity : O(n)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()