// // function solution(array) {
// //     let maxNumber = -1;
// //     let maxIndex = -1;
    
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] > maxNumber) {
// //             maxNumber = array[i];
// //             maxIndex = i;
// //         }
// //     }
    
// //     return [maxNumber, maxIndex]
// // }

// function solution(array) {
//     return [Math.max(...array), array.indexOf(Math.max(...array))];
// }













const solution = (array) => [Math.max(...array), array.indexOf(Math.max(...array))]



