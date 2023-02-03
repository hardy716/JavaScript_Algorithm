/* https://school.programmers.co.kr/learn/courses/30/lessons/42860 */




/* redefine(재정의) */

// input : name(만들고자 하는 이름 String)
// return : 조이스틱 조작 횟수의 최솟값(Number)

// condition1 : name은 모두 알파벳 대문자(65~)
// condition2 : name 길이 : [1,20]

// algorithm : 그리디

// logic(psuedo) : 




/* solution(구현) */

function solution(name) {
    let cnt = 0;
    
    let start = "A".charCodeAt();    // A의 아스키코드 
    let end = "Z".charCodeAt() + 1;  // B의 아스키코드 + 1
    let center = (start + end) / 2;  // 중간
    
    let move = name.length - 1;      // 좌우 초기값 설정
    
    for (let i = 0; i < name.length; i++) {
        
        let charCode = name.charCodeAt(i);    // 위/아래 조작 방향 선택하기
        (charCode < center) ? cnt += charCode - start : cnt += end - charCode
        
        let indexNotA = i + 1;    // 다음 커서부터 조작해야하는 문자 찾기
        while (indexNotA < name.length && name[indexNotA] == 'A') { indexNotA++; }
        
        move = Math.min(
            move,                               // 이전 값
            (i * 2) + name.length - indexNotA,  // 정방향 -> 역방향 
            (name.length - indexNotA) * 2 + i   // 역방향 -> 정방향
        )
    }

    return cnt + move;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33MB)
// 테스트 3 〉	통과 (0.06ms, 33.1MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.4MB)
// 테스트 10 〉 통과 (0.15ms, 33.4MB)
// 테스트 11 〉 통과 (0.15ms, 33.5MB)
// 테스트 12 〉 통과 (0.15ms, 33.4MB)
// 테스트 13 〉 통과 (0.15ms, 33.4MB)
// 테스트 14 〉 통과 (0.15ms, 33.4MB)
// 테스트 15 〉 통과 (0.16ms, 33.5MB)
// 테스트 16 〉 통과 (0.06ms, 33.4MB)
// 테스트 17 〉 통과 (0.06ms, 32.8MB)
// 테스트 18 〉 통과 (0.14ms, 32.8MB)
// 테스트 19 〉 통과 (0.07ms, 33.4MB)
// 테스트 20 〉 통과 (0.15ms, 33.4MB)
// 테스트 21 〉 통과 (0.06ms, 33.4MB)
// 테스트 22 〉 통과 (0.15ms, 33.4MB)
// 테스트 23 〉 통과 (0.21ms, 33.4MB)
// 테스트 24 〉 통과 (0.07ms, 33.4MB)
// 테스트 25 〉 통과 (0.16ms, 33.5MB)
// 테스트 26 〉 통과 (0.14ms, 33.5MB)
// 테스트 27 〉 통과 (0.14ms, 33.4MB)



/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// space complexity : O(1)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()