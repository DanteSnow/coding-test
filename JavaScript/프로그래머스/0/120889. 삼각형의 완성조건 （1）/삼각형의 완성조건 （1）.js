// function solution(sides) {
//     const A = sides.sort((a, b) => a - b);
//     return (A[0] + A[1]) > A[2] ? 1 : 2;
// }


























function solution(sides) {
    const answer = sides.sort((a,b) => a-b)
    
    return (answer[0] + answer[1]) > answer[2] ? 1 : 2;
}