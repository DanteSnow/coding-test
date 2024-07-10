// function solution(my_string) {
//     return my_string
//         .split("")
//         .filter(x => ["1","2","3","4","5","6","7","8","9","0"]
//         .includes(x))
//         .map(Number)
//         .reduce((a,b) => a+b);
// }

function solution(my_string) {
    const numbers = my_string.match(/\d/g);
    return numbers.map(Number).reduce((a, b) => a + b);
}