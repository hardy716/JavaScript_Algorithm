/* https://school.programmers.co.kr/learn/courses/30/lessons/43162 */




/* redefine(재정의) */

// input1 : 컴퓨터의 개수 n 
// input2 : 연결에 대한 정보가 담긴 2차원 배열 computers
// return : 네트워크의 개수

// condition1 : n - [1,200]
// condition2 : 컴퓨터의 번호 - [0,n-1]
// condition3 : i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현
// condition4 : computer[i][i]는 항상 1

// algorithm : DFS

// logic(psuedo) : 


/* solution(구현) */
function solution(n, computers) {
    let answer = 0;
    
    const check = new Array(n).fill(false)
        
    const DFS = (index) => {
        check[index] = true;
        
        for(let i=0; i<n; i++){
            if (computers[index][i] === 1 && !check[i]){ DFS(i); }
        }
    }
    
    for(let  i=0; i<n; i++){
        if (!check[i]) {
            DFS(i);
            answer++;
        }
    }
        
    return answer;
}



/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.15ms, 33.5MB)
// 테스트 2 〉	통과 (0.24ms, 33.5MB)
// 테스트 3 〉	통과 (0.27ms, 33.6MB)
// 테스트 4 〉	통과 (0.27ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.22ms, 33.6MB)
// 테스트 7 〉	통과 (0.15ms, 33.4MB)
// 테스트 8 〉	통과 (0.29ms, 33.6MB)
// 테스트 9 〉	통과 (0.20ms, 33.6MB)
// 테스트 10 〉 통과 (0.26ms, 33.6MB)
// 테스트 11 〉 통과 (0.42ms, 33.7MB)
// 테스트 12 〉 통과 (0.37ms, 33.7MB)
// 테스트 13 〉 통과 (0.24ms, 33.5MB)




/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// space complexity : O(n)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()