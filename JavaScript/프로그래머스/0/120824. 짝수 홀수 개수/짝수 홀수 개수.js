// function solution(num_list) {
//     let even = 0;
//     let odd = 0;
//     let answer = [];
    
//     for (let i = 0; i < num_list.length; i++) {
//         if (num_list[i] % 2 === 0) {
//             even ++;
//         } else {
//             odd ++;
//         }
//     }
    
//     answer.push(even, odd);
    
//     return answer;
// }


// function solution(num_list) {
//     let answer = [0, 0];
    
//     for (a of num_list) {
//         answer[a % 2] += 1;
//     }
    
//     return answer;
// }

// function solution(num_list) {
//     return [num_list.filter(num => num % 2 === 0).length,
//            num_list.filter(num => num % 2 !== 0).length]
// }

// const solution = (num_list) => [num_list.filter(num => num % 2 === 0).length,
//                                num_list.filter(num => num % 2 !== 0).length]

function solution(num_list) {
    let answer = [0, 0];
    for (a of num_list) answer[a % 2] ++;
    return answer;
}