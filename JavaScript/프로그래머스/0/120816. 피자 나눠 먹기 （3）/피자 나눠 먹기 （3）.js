// function solution(slice, n) {
//     let answer = Math.floor(n/slice);
//     if (n % slice) {
//         answer ++;
//     }
//     return answer;
// }

const solution = (slice, n) => Math.ceil(n / slice);