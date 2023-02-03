/* https://school.programmers.co.kr/learn/courses/30/lessons/42578 */




/* redefine(재정의) */

// input : clothes(스파이 의상 2차원 Array)
// return : 서로 다른 옷의 조합 수

// condition1 : 의상의 수는 [1,30]
// condition2 : 의상의 이름은 유일
// condition3 : 문자열 길이 [1,20]
// condition4 : 최소 한 개의 의상을 입어야 함

// algorithm : 해시 - object

// logic(psuedo) :
// 1. clothType을 키로 하는 해시 테이블을 구현한다. {A:a, B:b, C:c, D:d}
// 2. 해시 테이블 생성과 동시에 키 리스트(clothesType)도 생성한다. {A, B, C, D}
// 3. clothesType의 요소를 순회하면서 경우의 수를 구한다(키가 존재하지 않는다면 값에 0 대입). ->  (a+1)*(b+1)*(c+1)*(d+1) - 1




/* solution(구현) */

function solution(clothes) {
    let clothesDict = {};
    let clothesType = [];
    
    let answer = 1;
    
    for (let [clothName, clothType] of clothes) {
        if (!clothesDict[clothType]) {
            clothesDict[clothType] = 0
            clothesType.push(clothType);
        }
        clothesDict[clothType] += 1
    }

    for (let k of clothesType) {
        answer *= clothesDict[k] + 1
    }
    
    
    return answer - 1;
}




/* check(검증) - Big O Notation */

// time complexity  : O(n)
// space complexity : O(n)




/* improvements(개선점) */