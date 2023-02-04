/* https://school.programmers.co.kr/learn/courses/30/lessons/154539 */




/* redefine(재정의) */

// input : numbers(정수로 이루어진 1차원 Array) 
// return : 모든 원소에 대한 뒷 큰 수들을 차례로 담은 1차원 Array

// condition1 : numbers 길이 : [4, 1000000]
// condition2 : numbers[i] : [1, 1000000]

// algorithm : 우선순위 큐

// logic(psuedo) : 




/* solution(구현) */

function solution(numbers) {
    
    var answer = [];
    
    for (let i = 0; i < numbers.length; i++) {          // index 0부터 모든 노드 탐색
        let bigNum = -1;                                // bigNum : 뒷 큰 수 세팅(-1)
        
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] > numbers[i]) {              // 만약, 뒷 큰 수를 찾으면
                bigNum = numbers[j];                    // bigNum 갱신
                break;                                  // 탐색을 멈추고
            }
        }
        answer.push(bigNum);                            // answer에 push
    }
    
    return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.11ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.16ms, 33.3MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.40ms, 33.6MB)
// 테스트 6 〉	통과 (3.04ms, 37.9MB)
// 테스트 7 〉	통과 (2.30ms, 38MB)
// 테스트 8 〉	통과 (4.23ms, 42.1MB)
// 테스트 9 〉	통과 (3.60ms, 42.1MB)
// 테스트 10 〉 통과 (5.66ms, 46.7MB)
// 테스트 11 〉 통과 (6.66ms, 46.8MB)
// 테스트 12 〉 통과 (10.10ms, 56.1MB)
// 테스트 13 〉 통과 (11.07ms, 56.2MB)
// 테스트 14 〉 통과 (29.47ms, 77.3MB)
// 테스트 15 〉 통과 (94.46ms, 142MB)
// 테스트 16 〉 통과 (88.20ms, 142MB)
// 테스트 17 〉 통과 (85.91ms, 142MB)
// 테스트 18 〉 통과 (81.09ms, 142MB)
// 테스트 19 〉 통과 (66.23ms, 142MB)
// 테스트 20 〉    실패 (시간 초과)
// 테스트 21 〉    실패 (시간 초과)
// 테스트 22 〉	실패 (시간 초과)
// 테스트 23 〉	실패 (시간 초과)


/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// for loop(n)^2

// space complexity : O(n)




/* improvements(개선점) - 우선순위 큐를 사용하여 시간 복잡도 개선(n^2 => nlogn) */

function solution(numbers) {
    const answer = [];
    
    const pq = []; // 우선순위 큐 세팅
    
    for (let i = numbers.length - 1; i >= 0; i--) {                             // 역순으로 순회
        
        while (pq.length > 0 && pq[pq.length - 1] <= numbers[i]) { pq.pop(); }  // 우선순위 큐 갱신
        
        answer[i] = (pq.length > 0) ? pq[pq.length - 1] : -1;                   // answer 갱신()
        
        pq.push(numbers[i]);                                                    // 우선순위 큐 삽입
    }
    
    return answer;
}


// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.13ms, 33.6MB)
// 테스트 4 〉	통과 (0.14ms, 33.5MB)
// 테스트 5 〉	통과 (0.30ms, 33.7MB)
// 테스트 6 〉	통과 (3.20ms, 38.2MB)
// 테스트 7 〉	통과 (3.30ms, 38.2MB)
// 테스트 8 〉	통과 (7.17ms, 42.3MB)
// 테스트 9 〉	통과 (6.92ms, 42.5MB)
// 테스트 10 〉 통과 (12.41ms, 47MB)
// 테스트 11 〉 통과 (12.11ms, 47MB)
// 테스트 12 〉 통과 (34.04ms, 55.9MB)
// 테스트 13 〉 통과 (25.24ms, 55.8MB)
// 테스트 14 〉 통과 (55.62ms, 77.3MB)
// 테스트 15 〉 통과 (110.82ms, 137MB)
// 테스트 16 〉 통과 (115.39ms, 137MB)
// 테스트 17 〉 통과 (106.52ms, 137MB)
// 테스트 18 〉 통과 (129.07ms, 137MB)
// 테스트 19 〉 통과 (122.90ms, 137MB)
// 테스트 20 〉 통과 (117.40ms, 134MB)
// 테스트 21 〉 통과 (100.29ms, 133MB)
// 테스트 22 〉 통과 (86.16ms, 104MB)
// 테스트 23 〉 통과 (113.67ms, 127MB)


/* check(검증) - Big O Notation */

// time complexity  : O(nlogn)
// for loop(n) * priorityQueue(logn)

// space complexity : O(n)