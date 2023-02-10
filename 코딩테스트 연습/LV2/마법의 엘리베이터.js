/* https://school.programmers.co.kr/learn/courses/30/lessons/148653 */




/* redefine(재정의) */

// input : storey(엘리베이터가 있는 층을 나타내는 정수)
// return : 0층으로 가기 위해 필요한 마법의 돌의 최소값(Number)

// condition :

// algorithm : dfs

// logic(psuedo) : 




/* solution(구현) */

function solution(storey) {

  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (num, cnt) => {
    if (cnt >= answer) return;

    if (num === 0) { answer = cnt; }
    else {
      dfs(Math.floor(num / 10), cnt + num % 10);
      dfs(Math.floor(num / 10) + 1, cnt + 10 - num % 10);
    }
  }
  
  dfs(storey, 0);
    
  return answer;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.16ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.14ms, 33.4MB)
// 테스트 4 〉	통과 (0.15ms, 33.5MB)
// 테스트 5 〉	통과 (0.15ms, 33.5MB)
// 테스트 6 〉	통과 (0.14ms, 33.5MB)
// 테스트 7 〉	통과 (0.16ms, 33.4MB)
// 테스트 8 〉	통과 (0.16ms, 33.4MB)
// 테스트 9 〉	통과 (0.15ms, 33.4MB)
// 테스트 10 〉 통과 (0.26ms, 33.4MB)
// 테스트 11 〉 통과 (0.22ms, 33.4MB)
// 테스트 12 〉 통과 (0.15ms, 33.4MB)
// 테스트 13 〉 통과 (0.14ms, 33.4MB)



/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(n)




/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()