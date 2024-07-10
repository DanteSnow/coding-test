// function solution(n) {
//     let answer = 0;
    
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (i * j === n) {
//                 answer ++;
//             }
//         }
//     }
    
//     return answer;
// }

function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
       if (n % i === 0) {
           if (i * i === n) {
               answer ++;
           } else {
           answer += 2;
           }
       }
    }
    
    return answer;
}