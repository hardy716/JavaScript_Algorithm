/* https://school.programmers.co.kr/learn/courses/30/lessons/12906 */




/* redefine(재정의) */

// input : arr(0부터 9까지의 숫자로 이루어진 1차원 Array)
// return  연속된 숫자를 제거한 1차원 배열

// condition1 : arr의 길이 : [1,1000000]
// condition2 : arr 원소 값 : [0, 9]

// algorithm : 스택

// logic(psuedo) : 




/* solution(구현) */

function solution(arr)
{
    let answer = [];
    let lastNum = -1;    // 0 ~ 9에 포함되지 않도록 초기값(-1) 설정

    for (let num of arr) {
        if (num !== lastNum) {    // 연속된 숫자가 아니라면,
            lastNum = num;        // lastNum 갱신
            answer.push(num);     // 스택에 push
        }
    }
    
    return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.06ms, 33.6MB)
// 테스트 2 〉	통과 (0.18ms, 33.5MB)
// 테스트 3 〉	통과 (0.19ms, 33.4MB)
// 테스트 4 〉	통과 (0.17ms, 33.4MB)
// 테스트 5 〉	통과 (0.22ms, 33.6MB)
// 테스트 6 〉	통과 (0.16ms, 33.4MB)
// 테스트 7 〉	통과 (0.17ms, 33.5MB)
// 테스트 8 〉	통과 (0.20ms, 33.4MB)
// 테스트 9 〉	통과 (0.13ms, 33.6MB)
// 테스트 10 〉 통과 (0.18ms, 33.5MB)
// 테스트 11 〉 통과 (0.15ms, 33.4MB)
// 테스트 12 〉 통과 (0.16ms, 33.6MB)
// 테스트 13 〉 통과 (0.13ms, 33.5MB)
// 테스트 14 〉 통과 (0.14ms, 33.4MB)
// 테스트 15 〉 통과 (0.13ms, 33.5MB)
// 테스트 16 〉 통과 (0.14ms, 33.5MB)
// 테스트 17 〉 통과 (0.04ms, 33.5MB)
// 효율성
// 테스트 1 〉	통과 (27.29ms, 91.2MB)
// 테스트 2 〉	통과 (30.33ms, 90.8MB)
// 테스트 3 〉	통과 (29.95ms, 91.4MB)
// 테스트 4 〉	통과 (56.42ms, 90.9MB)




/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(n)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()