/* https://school.programmers.co.kr/learn/courses/30/lessons/42576 */




/* redefine(재정의) */

// input1 : participant(마라톤 참여한 선수들 이름이 담긴 Array)
// input2 : completion(마라톤 완주한 선수들 이름이 담긴 Array)
// return : 마라톤을 완주하지 못한 선수들의 이름을 문자열로 return

// condition1 : 참가자 이름은 알파벳 소문자(20자내)
// condition2 : 참가자 동명이인 가능
// condition3 : 완주 못 한 참가자는 1명
// condition4 : participant.length <= 100,000

// algorithm : 해시 - object

// logic(psuedo) : 
// 1. 참가자 명을 키로 하는 해시 테이블을 구현한다.
// 2. 참가 +1, 완주 -1 하며 값을 계속 갱신한다
// 3. 순회하면서 값이 0을 초과하는 키를 반환한다.




/* solution(구현) */

function solution(participant, completion) {
    
    const participantDict = {};

    for (let i in participant) {
        if (!participantDict[participant[i]]) {
            participantDict[participant[i]] = 0;
        }
        participantDict[participant[i]] += 1
        if (!participantDict[completion[i]]) {
            participantDict[completion[i]] = 0;
        }
        participantDict[completion[i]] -= 1
    }

    for (let k of Object.keys(participantDict)) {    // Object.keys : O(n)
        if (participantDict[k] > 0) {
            return k;
        }
    }
}




/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// space complexity : O(n)




/* improvements(개선점) */
// completion 배열의 길이가 participant 배열의 길이보다 1 작기 때문에,
// 마지막 n번째 순회 시 의도하지 않은 키-값 쌍(undefined: -1)이 participantDict에 추가된다.
// participantDict[k] > 0을 만족하지 않아 문제 풀이에 큰 영향은 없지만 useless code이므로 예외처리(82)

function solution(participant, completion) {
    
    const participantDict = {};

    for (let i in participant) {
        if (!participantDict[participant[i]]) {
            participantDict[participant[i]] = 0;
        }
        participantDict[participant[i]] += 1
        if (!participantDict[completion[i]]) {
            participantDict[completion[i]] = 0;
        }
        participantDict[completion[i]] -= 1
    }

    delete participantDict.undefined;    // 예외 처리 : participantDict의 프로퍼티 키가 Undefined인 속성 delete(O(1))

    for (let k of Object.keys(participantDict)) {
        if (participantDict[k] > 0) {
            return k;
        }
    }
}




/* recheck(검증) - Big O Notation */

// time complexity  : O(n^2)
// space complexity : O(n)