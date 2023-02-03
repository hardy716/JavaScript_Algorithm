/* https://school.programmers.co.kr/learn/courses/30/lessons/42883 */




/* redefine(재정의) */

// input : number(문자열 형식의 숫자 String)
// return : k(제거할 개수)

// condition1 : number 길이 : [2,1000000]
// condition2 : k 크기 : [1, number 길이)

// algorithm : 그리디

// logic(psuedo) : 부분배열에서 최댓값을 구하고 필요없는 값들은 제거하는 방식을 반복




/* solution(구현) - 시간초과(10, 12) */

function solution(number, k) {
    let answer = '';
    let numList = [...number];
    let startIdx = 0;
    let delCnt = 0;
    
    let ord = 0;
    while (k - delCnt > 0) {
        ord++;
        let maxIdx = 0;
        let maxNum = -1;
        
        for (let i = startIdx; i < startIdx + k - delCnt + 1; i++) {
            if (numList[i] > maxNum) {
                maxNum = numList[i];
                maxIdx = i;
                if (maxNum === 9) break;  // 예외 처리
            }
        }

        answer += maxNum;
        startIdx = maxIdx + 1;
        delCnt = startIdx - ord;

    }
    
    if (startIdx - 1 < number.length) { answer += number.substr(startIdx) }
    
    return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.15ms, 33.3MB)
// 테스트 3 〉	통과 (0.16ms, 33.4MB)
// 테스트 4 〉	통과 (0.18ms, 33.4MB)
// 테스트 5 〉	통과 (0.51ms, 33.4MB)
// 테스트 6 〉	통과 (82.85ms, 36.8MB)
// 테스트 7 〉	통과 (168.04ms, 37.3MB)
// 테스트 8 〉	통과 (1290.72ms, 38.1MB)
// 테스트 9 〉	통과 (5.32ms, 38.5MB)
// 테스트 10 〉 실패 (시간 초과)
// 테스트 11 〉 통과 (0.08ms, 33.4MB)
// 테스트 12 〉 실패 (시간 초과)



/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// space complexity : O(n)




/* improvements(개선점) */

// 1. numList = [...number]을 생성하지 말고 charAt()을 이용하여 문자열에서 문자 추출
//   -> 시간복잡도 개선 X(유의미한 차이가 없음)
// 2. 스택 자료구조 이용

function solution(number, k) {
    const arr = [];
    // 반복문을 통해 number의 길이만큼 반복
    for (let i = 0; i < number.length; i++) {
        // arr의 길이가 0보다 크고, 
        // arr의 마지막 요소가 number[i]보다 작고, 
        // k가 0보다 클 때
        while (
            arr.length > 0 
            && arr[arr.length - 1] < number[i] 
            && k > 0
        ) {
            // k를 1 감소
            k--;
            // arr의 마지막 요소를 제거
            arr.pop();
        }
        // number[i]를 arr에 추가
        arr.push(number[i]);
    }
    // arr의 길이에서 k를 뺀 값만큼 제거
    arr.splice(number.length - k);
    // arr를 join 해서 문자열로 반환
    return arr.join("");
}



/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.5MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.23ms, 33.6MB)
// 테스트 5 〉	통과 (0.28ms, 33.6MB)
// 테스트 6 〉	통과 (7.23ms, 37.2MB)
// 테스트 7 〉	통과 (7.40ms, 38.6MB)
// 테스트 8 〉	통과 (10.04ms, 39.9MB)
// 테스트 9 〉	통과 (29.42ms, 54.6MB)
// 테스트 10 〉 통과 (32.01ms, 49.6MB)
// 테스트 11 〉 통과 (0.05ms, 33.6MB)
// 테스트 12 〉 통과 (0.05ms, 33.5MB)   


/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// space complexity : O(n)