/* https://school.programmers.co.kr/learn/courses/30/lessons/140107 */




/* redefine(재정의) */

// input1 : k(간격 - number)
// input2 : d(원점과의 거리 - number)
// return : 찍히는 점의 총 개수 - number

// condition1 : k : [1,1000000]
// condition2 : d : [1,1000000]

// algorithm : 수학

// logic(psuedo) : 




/* solution(구현) */

function solution(k, d) {
    let answer = 0;
    
    for (let i=0; i<=d; i+=k) {
        if (i > d) break;
        answer += parseInt(Math.sqrt(d**2 - i**2)/k) + 1;
    }
    return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.48ms, 33.7MB)
// 테스트 4 〉	통과 (0.31ms, 33.6MB)
// 테스트 5 〉	통과 (0.63ms, 33.9MB)
// 테스트 6 〉	통과 (0.54ms, 33.9MB)
// 테스트 7 〉	통과 (0.40ms, 33.7MB)
// 테스트 8 〉	통과 (2.97ms, 37.6MB)
// 테스트 9 〉	통과 (0.63ms, 33.8MB)
// 테스트 10 〉 통과 (2.39ms, 37.1MB)
// 테스트 11 〉 통과 (17.80ms, 37.9MB)
// 테스트 12 〉 통과 (0.06ms, 33.4MB)
// 테스트 13 〉 통과 (12.57ms, 37.9MB)
// 테스트 14 〉 통과 (7.88ms, 37.8MB)
// 테스트 15 〉 통과 (0.06ms, 33.6MB)
// 테스트 16 〉 통과 (0.04ms, 33.4MB)



/* check(검증) - Big O Notation */

// time complexity  : O(d/k)
// space complexity : O(1)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()