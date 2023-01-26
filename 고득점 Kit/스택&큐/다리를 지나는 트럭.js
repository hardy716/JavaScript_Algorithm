/* https://school.programmers.co.kr/learn/courses/30/lessons/42583 */




/* redefine(재정의) */

// input1 : bridge_length(최대 올라갈 수 있는 트럭 수 Number)
// input2 : weight(견딜 수 있는 최대 하중 Number)
// input3 : truck_weights(대기 중인 트럭별 하중이 담긴 1차원 Array)
// return : 모든 트럭이 다리를 건너는데 걸리는 최소시간(초) Number

// condition1 : bridge_length : [1,10000]
// condition2 : weight : [1,10000]
// condition3 : truck_weights : [1,10000]
// condition4 : truck 속도 : 1

// algorithm : 큐

// logic(psuedo) : 




/* solution(구현) */

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let weightSum = 0;
    let bridge = new Array(bridge_length).fill(0);
  
    do {
        answer++;
        weightSum -= bridge.shift();
      
        (truck_weights.length > 0 && weightSum + truck_weights[0] <= weight)
        ? nextWeight = truck_weights.shift()
        : nextWeight = 0
      
        weightSum += nextWeight;
        bridge.push(nextWeight);
    }
    while (weightSum > 0);
  
    return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.61ms, 33.6MB)
// 테스트 2 〉	통과 (7.73ms, 37.4MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (5.15ms, 37.4MB)
// 테스트 5 〉	통과 (29.79ms, 37.9MB)
// 테스트 6 〉	통과 (9.77ms, 38MB)
// 테스트 7 〉	통과 (0.51ms, 33.5MB)
// 테스트 8 〉	통과 (0.27ms, 33.5MB)
// 테스트 9 〉	통과 (4.46ms, 36.6MB)
// 테스트 10 〉 통과 (0.19ms, 33.5MB)
// 테스트 11 〉 통과 (0.14ms, 33.5MB)
// 테스트 12 〉 통과 (0.22ms, 33.4MB)
// 테스트 13 〉 통과 (0.46ms, 33.5MB)
// 테스트 14 〉 통과 (0.22ms, 33.4MB)


/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// space complexity : O(n)




/* improvements(개선점) */




/* 결과 */
// 정확성


/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()