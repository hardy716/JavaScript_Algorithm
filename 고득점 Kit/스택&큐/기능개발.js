/* https://school.programmers.co.kr/learn/courses/30/lessons/42586 */




/* redefine(재정의) */

// input : progresses(작업의 진도가 담긴 1차원 Array), speeds(작업의 개발 속도가 담긴1차원 Array)
// return : 배포별 배포되는 기능 수가 담긴 1차원 Array

// condition1 : input 배열들의 길이 : [1,100]
// condition2 : 작업 진도 및 속도 : [1,100]

// algorithm : 스택

// logic(psuedo) : 




/* solution(구현) */

function solution(progresses, speeds) {
    
    let answer = [];
    let endDay = [];

    for (let i=0; i<progresses.length; i++) {
        end = Math.ceil((100 - progresses[i]) / speeds[i]);  // 작업 잔여일 구하기
        endDay.push(end);                                    // 작업 잔여일 리스트에 push
    }

    let cnt = 0;             // 배포되는 기능 수
    let maxDay = endDay[0];  // 배포별 기준일 (첫 작업 잔여일로 초기화)
    
    for (let day of endDay) {
        if (day > maxDay) {    // 다음 배포일에 속한다면,  
            maxDay = day;      // 배포별 기준일 갱신 
            answer.push(cnt)   // 배포되는 기능 수 anwer 리스트에 push
            cnt = 1;           // 배포되는 기능 수 초기화(1)
        }
        else {
            cnt++;             // 같은 배포일에 속한다면 cnt++
        }
    }
    if (cnt > 0) answer.push(cnt);  // 마지막 배포되는 기능 수가 있는지 확인하고, 있으면 push
    
    return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.18ms, 33.5MB)
// 테스트 3 〉	통과 (0.18ms, 33.4MB)
// 테스트 4 〉	통과 (0.17ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.1MB)
// 테스트 6 〉	통과 (0.07ms, 33.1MB)
// 테스트 7 〉	통과 (0.18ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.4MB)
// 테스트 9 〉	통과 (0.18ms, 33.3MB)
// 테스트 10 〉 통과 (0.18ms, 33.4MB)
// 테스트 11 〉 통과 (0.07ms, 33.5MB)



/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(n)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()