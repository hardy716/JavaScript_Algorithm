/* https://school.programmers.co.kr/learn/courses/30/lessons/152996 */




/* redefine(재정의) */

// input : weights(사람들의 몸무게가 담긴 1차원 Array)
// return : 시소 짝꿍이 몇 쌍 존재하는지 Number

// condition1 : weights 길이 : [1, 100000]
// condition2 : weights[i] : [100,1000]

// algorithm :

// logic(psuedo) : 




/* solution(구현) */

function solution(weights) {
    let answer = 0;
    
    const people = new Array(1001).fill(0);
    for (let w of weights) { people[w] += 1; }
    
    for (let w of weights) {
        const w1 = w / 2;
        const w2 = w * 2 / 3;
        const w3 = w * 3 / 4;
        const w4 = w;
        const w5 = w * 4 / 3;
        const w6 = w * 3 / 2;
        const w7 = w * 2;
        
        if (w1 % 1 === 0 && w1 < 1001) { answer += people[w1]; }
        if (w2 % 1 === 0 && w2 < 1001) { answer += people[w2]; }
        if (w3 % 1 === 0 && w3 < 1001) { answer += people[w3]; }
        if (w4 % 1 === 0 && w4 < 1001) { answer += (people[w4] - 1); }
        if (w5 % 1 === 0 && w5 < 1001) { answer += people[w5]; }
        if (w6 % 1 === 0 && w6 < 1001) { answer += people[w6]; }
        if (w7 % 1 === 0 && w7 < 1001) { answer += people[w7]; }
    }
    
    return answer/2;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.5MB)
// 테스트 3 〉	통과 (0.09ms, 33.6MB)
// 테스트 4 〉	통과 (7.50ms, 38.3MB)
// 테스트 5 〉	통과 (8.83ms, 38.8MB)
// 테스트 6 〉	통과 (12.04ms, 39.5MB)
// 테스트 7 〉	통과 (12.62ms, 39.8MB)
// 테스트 8 〉	통과 (14.19ms, 40.3MB)
// 테스트 9 〉	통과 (16.26ms, 39.3MB)
// 테스트 10 〉 통과 (18.69ms, 39.7MB)
// 테스트 11 〉 통과 (19.87ms, 39.7MB)
// 테스트 12 〉 통과 (15.92ms, 39.8MB)
// 테스트 13 〉 통과 (28.45ms, 39.9MB)
// 테스트 14 〉 통과 (21.51ms, 39.7MB)
// 테스트 15 〉 통과 (19.33ms, 39.8MB)
// 테스트 16 〉 통과 (0.09ms, 33.6MB)
// 테스트 17 〉 통과 (0.11ms, 33.5MB)



/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(1001)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()