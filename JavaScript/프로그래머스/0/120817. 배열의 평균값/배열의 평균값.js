// function solution(numbers) {
//     let answer = 0;
//     for (let i of numbers) {
//         answer += i;
//     }
//     return answer/numbers.length;
// }

function solution(numbers) {
    return numbers.reduce((a,b) => a + b) / numbers.length;
}