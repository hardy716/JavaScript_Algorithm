/* https://school.programmers.co.kr/learn/courses/30/lessons/1845 */




/* redefine(재정의) */

// input : nums(폰켓몬의 종류 번호가 담긴 1차원 Array)
// return : N/2마리의 폰켓몬을 선택하는 방법 중, 최대로 가질 수 있는 포켓몬 종류 수

// condition : N은 짝수 -> N/2는 항상 정수(parseInt 생략 가능)

// algorithm : 해시 - set




/* solution(구현) */

function solution(nums) {
    
    const N = nums.length;           // nums의 길이
    const nums_set = new Set(nums);  // 폰켓몬의 종류 set

    //  nums_set의 size는 폰켓몬 종류 수
    //  (폰켓몬 종류 수 >= 폰켓몬 개수) ? 폰켓몬 개수 : 폰켓몬 종류 수
    answer = Math.min(nums_set.size, N/2);
    
    return answer;
}




/* check(검증) - Big O Notation */

// time complexity  : O(1)
// space complexity : O(n)




/* improvements(개선점) */