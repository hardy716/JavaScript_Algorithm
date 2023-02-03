/* https://school.programmers.co.kr/learn/courses/30/lessons/155651 */




/* redefine(재정의) */

// input : book_time(["HH:MM", "HH:MM"]) 형태로 입실 시간과 퇴실 시간이 담긴 2차원 Array)
// return : 예약 손님이 모두 입실하기 위해 필요한 최소 객실의 수 Number

// condition1 : book_time 길이 : [1,1000]
// condition2 : 입실 및 퇴실 시간(24시간 표기법) : ["00:00","23:59"]
// condition3 : 입실 시간 < 퇴실 시간

// algorithm : 정렬, 스택, 그리디?

// logic(psuedo) :
// 1. input 데이터 가공(분으로 환산하여 Number 형으로) : [입실 시간(분):Number, 퇴실 시간(분):Number]
// 2. 대실 시작 시간을 기준으로 오름차순 정렬
// 3. 객실마다 입실 여부를 검사
// 4. 입실이 가능하다면, 해당 객실(room[i]) 값 갱신
// 5. 입실이 불가능하다면, 새로운 객실(room[room.length + 1])에 push
// 6. 모든 예약 손님들의 입실이 끝나면, room.length 반환


/* solution(구현) */

function solution(book_time) {
    
    const bookTime = book_time.map(function([start, end]) {
        
        [sh, sm] = start.split(":").map(Number);  // "(sh):(sm)"
        [eh, em] = end.split(":").map(Number);    // "(eh):(em)"
        
        return [sh * 60 + sm, eh * 60 + em];      // minute(분)으로 환산
    });
    
    bookTime.sort((a, b) => a[0] - b[0]);  // 대실 시작 시간을 기준으로 오름차순 정렬
    
    let room = [0];
    for (let [start, end] of bookTime) {         // 현재 손님의 [입실시간, 퇴실 시간] 세팅
        
        let flag = false;                        // 입실 가능/불가능 표시
        
        for (let i=0; i<room.length; i++) {      // 객실(room[i])마다 탐색
            if (start >= room[i] + 10) {         // 현재 손님의 입실 시간 >= 이전 손님의 퇴실 시간+10 이면
                room[i] = end;                   // 해당 객실에 손님 입실
                flag = true;                     // 입실 가능 표시
                break;                           // break
            }
        }
        if (flag === false) { room.push(end); }  // 만약 입실하지 못했으면, 새로운 객실을 만들어 push
    }
    return room.length;
}


/* 결과 */
// 정확성
// 테스트 1 〉	통과 (0.55ms, 33.5MB)
// 테스트 2 〉	통과 (1.59ms, 33.6MB)
// 테스트 3 〉	통과 (8.66ms, 37.6MB)
// 테스트 4 〉	통과 (7.80ms, 37.1MB)
// 테스트 5 〉	통과 (0.12ms, 33.4MB)
// 테스트 6 〉	통과 (8.54ms, 37.4MB)
// 테스트 7 〉	통과 (7.06ms, 37.6MB)
// 테스트 8 〉	통과 (1.60ms, 33.8MB)
// 테스트 9 〉	통과 (1.93ms, 33.6MB)
// 테스트 10 〉 통과 (8.41ms, 37.4MB)
// 테스트 11 〉 통과 (9.80ms, 37.6MB)
// 테스트 12 〉 통과 (9.55ms, 37.5MB)
// 테스트 13 〉 통과 (1.69ms, 33.7MB)
// 테스트 14 〉 통과 (6.78ms, 37.5MB)
// 테스트 15 〉 통과 (9.67ms, 37.6MB)
// 테스트 16 〉 통과 (2.72ms, 33.7MB)
// 테스트 17 〉 통과 (6.16ms, 37.5MB)
// 테스트 18 〉 통과 (5.54ms, 37.4MB)
// 테스트 19 〉 통과 (6.85ms, 38.5MB)



/* check(검증) - Big O Notation */

// time complexity  : O(n^2)
// 이중 for 문으로 탐색

// space complexity : O(n)
// room의 최대 크기 <= n



/* improvements(개선점) */




/* check(검증) - Big O Notation */

// time complexity  : O()
// space complexity : O()