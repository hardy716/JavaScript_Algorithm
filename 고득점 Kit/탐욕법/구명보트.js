/* https://school.programmers.co.kr/learn/courses/30/lessons/42885 */




/* redefine(재정의) */

// input1 : people(사람 몸무게를 담은 1차원 Array)
// input2 : limit(최대 하중 Number)
// return : 필요한 구명보트 개수의 최솟값 Number

// condition1 : people 길이 : [1, 50000]
// condition2 : people 요소 크기 : [40, 240]
// condition3 : limit 크기 : [40,240]
// condition4 : people 요소 크기 최댓값 < limit 
// condition5 : 구명보트 최대 탑승인원 2인

// <condition5> : people은 비정렬 상태

// algorithm : 그리디, 큐?

// logic(psuedo) : 
// 1. 오름차순 정렬
// 2. 만약, 가장 가벼운 사람 + 기장 무거운 사람 <= left++, right-- (2인 탑승)
// 2. 만약, 가장 가벼운 사람 + 가장 무거운 사람 > right-- (1인: 가장 무거운 사람 탑승)
// 3. 예외 처리
//    마지막에 남은 인원이 모두 탑승한 경우(2인 탑승) 구명보트 추가 X

/* solution(구현) */

function solution(people, limit) {
    
    let cnt = 1;                   // 구명보트 개수 1로 초기화

    let left = 0;
    let right = people.length-1;

    people.sort((a, b) => a - b);  // people 내림차순 정렬

    while (left < right) {   
        if (people[left] + people[right] <= limit) { 
            left++;
            if (left === right) cnt--;
        }
        right--;
        cnt++;  // 다음 구명보트 준비
    }
    
    return cnt;
}

/* 결과 */
// 정확성  테스트
// 테스트 1 〉	통과 (1.94ms, 35.5MB)
// 테스트 2 〉	통과 (1.07ms, 33.6MB)
// 테스트 3 〉	통과 (1.16ms, 33.7MB)
// 테스트 4 〉	통과 (1.11ms, 33.6MB)
// 테스트 5 〉	통과 (0.76ms, 33.6MB)
// 테스트 6 〉	통과 (0.42ms, 33.7MB)
// 테스트 7 〉	통과 (0.60ms, 33.6MB)
// 테스트 8 〉	통과 (0.16ms, 33.6MB)
// 테스트 9 〉	통과 (0.20ms, 33.7MB)
// 테스트 10 〉 통과 (1.86ms, 33.6MB)
// 테스트 11 〉 통과 (1.79ms, 33.6MB)
// 테스트 12 〉 통과 (0.91ms, 33.7MB)
// 테스트 13 〉 통과 (1.08ms, 33.6MB)
// 테스트 14 〉 통과 (1.25ms, 33.8MB)
// 테스트 15 〉 통과 (0.21ms, 33.7MB)
// 효율성  테스트
// 테스트 1 〉	통과 (14.94ms, 38.3MB)
// 테스트 2 〉	통과 (12.88ms, 38.2MB)
// 테스트 3 〉	통과 (62.95ms, 37.8MB)
// 테스트 4 〉	통과 (11.53ms, 38.5MB)
// 테스트 5 〉	통과 (10.42ms, 38.1MB)




/* check(검증) - Big O Notation */

// time complexity  : O(nlogn)
// space complexity : O(1)

// 위 코드의 시간 복잡도는 O(nlogn) 이다.
// 이 코드는 먼저 people 배열을 내림차순으로 정렬하기 위해 sort() 함수를 사용하는데 이는 시간 복잡도가 O(nlogn) 이다. 
// 그리고 while문에서는 left와 right 포인터를 이용하여 인덱스를 이동하며 구명보트를 결정하는데 이는 O(n) 이다.
// 그리고 공간 복잡도는 O(1) 이다.
// 코드는 people 배열만을 사용하고 정렬된 people 배열을 저장하는 공간을 추가로 사용하지 않기 때문에, 추가적인 메모리 공간을 사용하지 않는다.


/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()