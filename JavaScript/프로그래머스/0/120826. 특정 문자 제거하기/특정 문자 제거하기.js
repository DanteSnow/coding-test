// function solution(my_string, letter) {
//     let array = [];
    
//     for (let i = 0; i <= my_string.length; i++) {
//         if (my_string[i] !== letter) {
//             array.push(my_string[i]);
//         }
//     }
    
//     return array.join('');
// }

function solution(my_string, letter) {
    return my_string.split(letter).join('');
}