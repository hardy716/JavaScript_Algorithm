/* https://school.programmers.co.kr/learn/courses/30/lessons/148652 */




/* redefine(재정의) */

// input1 : n (유사 칸토어 비트열 순번: n번째) - Number
// input2 : l (1-base index 시작점) - Number
// input3 : r (1-base index 마침점) - Number
// return : 1-base index 폐구간[l,r] 내의 1의 개수 - Number

// condition1 : n : [1,20]
// condition2 : l,r : [1,5**n]
// condition3 : r : [l,l+10000000)

// algorithm1 : 메모리제이션
// algorithm2 : 수학(5진법)

// logic(psuedo) : 


/* solution(구현) */

function solution(n, l, r) {

    const CantorLike = (preCount) => {
        
        // 0. currCount = preCount;
        const currCount = [...preCount];
        
        // 1. max값 : currCount[currCount.length - 1], arr : preCount 리스트
        let maxCnt = currCount[currCount.length - 1];
        
        // 2. arr을 순회하며 각 (요소 + max) 값을 currCount에 push, max 갱신 : currCount[currCount.length - 1]
        for (let i=0; i<preCount.length; i++) { currCount.push(preCount[i] + maxCnt); }
        maxCnt = currCount[currCount.length - 1];
        
        // 3. 5**(n-1)만큼 max 값을 currCount에 push
        for (let i=0; i<preCount.length; i++) { currCount.push(maxCnt); }
        
        // 4. 2번 단계를 반복
        for (let i=0; i<preCount.length; i++) { currCount.push(preCount[i] + maxCnt); }
        maxCnt = currCount[currCount.length - 1];
        
        // 5. 2번 단계를 반복
        for (let i=0; i<preCount.length; i++) { currCount.push(preCount[i] + maxCnt); }
        
        // 6. currCount 리스트를 return
        return currCount;
    }
    
    let countOne = [1];
    let m = 0;
    while (m < n) {
        m++;
        countOne = CantorLike(countOne);
    }
    
    return countOne[r-1] - countOne[l-1] + 1;
}


/* 결과 */
// 일부 런타임 에러 발생, 토의 필요


/* check(검증) - Big O Notation */

// time complexity  : O(n * 5^(n-1))
// space complexity : O(5^n)




/* improvements(개선점) */

// n번째 = n-1번째 + n-1번째 + '0'.repeat(n-1번째 길이만큼) + n-1번째 + n-1번째

// index -> 5진법 변환 (~0, ~1, ~2, ~3, ~4)
// <경우1> : ~에 2가 포함되어 있지 않은 경우 : 11011 패턴
// <경우2> : ~에 2가 포함되어 있는 경우     : 00000 패턴

// 1이 나오는 경우는 <경우1>에서 끝자리가 2가 아닌 경우, 즉 5진법으로 변환했을때 2가 하나도 없는 경우
// !i.toString(5).match('2')

function solution(n, l, r) {
    let answer = 0;
    for (let i = l - 1; i <=r - 1; i++) {
        if (!i.toString(5).match('2')) answer += 1;
    }
    return answer;
}


/* check(검증) - Big O Notation */

// time complexity  : O(r - l + 1)
// space complexity :  O(1)