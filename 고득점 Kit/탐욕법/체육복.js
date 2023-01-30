/* https://school.programmers.co.kr/learn/courses/30/lessons/42862 */




/* redefine(재정의) */

// input1 : n(전체 학생들의 수)
// input2 : lost(체육복을 도난당한 학생들의 번호(Number)가 담긴 1차원 Array)
// input3 : reserve(여벌옷을 가지고 있는 학생들의 번호(Number)가 담긴 1차원 Array)
// return : 체육 수업을 들을 수 있는 학생들의 수(Number)

// condition1 : 전체 학생 수 : [2,30]
// condition2 : lost, reserve 모두 length : [1,n], 중복X
// condition3 : 여벌 옷을 가지고 온 학생들도 도난(두 개 중 하나만)당할 수 있음

// algorithm : 그리디

// logic(psuedo) : 잎 반호의 학생을 우선적으로 탐색




/* solution(구현) */

function solution(n, lost, reserve) {
    
    const studentClothes = new Array(n).fill(1);             // 기본 값 설정(1) 
     
    lost.map(num => {studentClothes[num - 1] = 0});      // 도난 옷 갱신(-1)
    reserve.map(num => {studentClothes[num - 1] += 1});  // 여벌 옷 갱신(+1)

    let cnt = n;
    for(let num=0; num < n; num++) {
        
        if (studentClothes[num] === 0) {               // 해당 번호의 학생이 체육복이 없다면,             
            studentClothes[num] = 1;                   // 여벌의 옷을 받는다고 가정(+1)
            
            if (studentClothes[num - 1] === 2) {       // 앞 번호의 학생에게 여벌 옷이 있다면,
                studentClothes[num - 1] = 1;           // 앞 번호의 학생 1로 초기화(-1)
            }
            else if (studentClothes[num + 1] === 2) {  // 뒤 번호의 학생에게 여벌 옷이 있다면,
                studentClothes[num + 1] = 1;           // 뒤 번호의 학생 1로 초기화(-1)
            }
            else {                                     // 앞, 뒤 번호의 학생 모두 여벌 옷이 없다면,
                studentClothes[num] = 0;               // 현재 번호의 학생 0으로 초기화
                cnt--;                                 // 체육 수업을 듣는 학생 수 감소(1)
            }
        }
    }
    
    return cnt;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.17ms, 33.6MB)
// 테스트 3 〉	통과 (0.16ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.15ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.16ms, 33.4MB)
// 테스트 8 〉	통과 (0.07ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.4MB)
// 테스트 10 〉 통과 (0.17ms, 33.4MB)
// 테스트 11 〉 통과 (0.08ms, 33.4MB)
// 테스트 12 〉 통과 (0.07ms, 33.5MB)
// 테스트 13 〉 통과 (0.08ms, 33.4MB)
// 테스트 14 〉 통과 (0.08ms, 33.4MB)
// 테스트 15 〉 통과 (0.07ms, 33.4MB)
// 테스트 16 〉 통과 (0.07ms, 33.5MB)
// 테스트 17 〉 통과 (0.07ms, 33.5MB)
// 테스트 18 〉 통과 (0.07ms, 33.4MB)
// 테스트 19 〉 통과 (0.07ms, 33.5MB)
// 테스트 20 〉 통과 (0.07ms, 33.6MB)
// 테스트 21 〉 통과 (0.07ms, 33.1MB)
// 테스트 22 〉 통과 (0.07ms, 33.5MB)
// 테스트 23 〉 통과 (0.07ms, 33.4MB)
// 테스트 24 〉 통과 (0.07ms, 33.4MB)
// 테스트 25 〉 통과 (0.07ms, 33.4MB)



/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(n)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()