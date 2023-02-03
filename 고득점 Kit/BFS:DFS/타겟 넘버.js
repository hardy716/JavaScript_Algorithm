/* https://school.programmers.co.kr/learn/courses/30/lessons/43165 */




/* redefine(재정의) */

// input1 : numbers(사용할 수 있는 숫자가 담긴 1차원 Array)
// input2 : target(타겟 Number)
// return : 타겟 넘버를 만드는 방법의 수 Number

// condition1 : numbers 길이 : [2,20]
// condition2 : numbers 요소 크기 : [1,50]
// condition3 : target 요소 크기 : [1,1000]

// algorithm : DFS

// logic(psuedo) : 
// 1. 각 노드의 자식을 두 개(다음 인덱스의 +요소, -요소)로 설정
// 2. DFS, +요소부터 탐색
// 3. DFS 완료(cnt === 0), 타겟과 일치하는지 확인하고 반환 값 갱신




/* solution(구현) */

function solution(numbers, target) {
    
    let answer = 0;                                       // 반환 값 초기 세팅(0)
    

    function totalDFS(cnt, total) {                       // totalDFS(cnt: 남은 탐색 횟수, total: 총계)         
    
        if (cnt > 0) {                                    // cnt가 0보다 크다면,
            totalDFS(cnt - 1, total + numbers[cnt - 1]);  // DFS 실행(+ 연산 탐색)
            totalDFS(cnt - 1, total - numbers[cnt - 1]);  // DFS 실행(- 연산 탐색)
        }
    
        else {                                            // DFS가 끝나면,
            (total === target)? answer++ : answer;        // target과 일치하는지 확인(일치하면 ++)
            return;
        }
        
    }
    return totalDFS(numbers.length, 0);;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (37.05ms, 36.4MB)
// 테스트 2 〉	통과 (41.16ms, 36.3MB)
// 테스트 3 〉	통과 (0.19ms, 33.4MB)
// 테스트 4 〉	통과 (0.39ms, 33.3MB)
// 테스트 5 〉	통과 (29.51ms, 36.2MB)
// 테스트 6 〉	통과 (0.26ms, 33.4MB)
// 테스트 7 〉	통과 (0.19ms, 33.4MB)
// 테스트 8 〉	통과 (20.62ms, 36.3MB)




/* check(검증) - Big O Notation */

// time complexity  : O(2^n)
// depth = n, e = 2이므로

// space complexity : O(n)
// 호출 스택의 크기가 n에 비례하며, 깊이가 n일 때의 호출 스택의 크기가 n에 해당하기 때문



/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()