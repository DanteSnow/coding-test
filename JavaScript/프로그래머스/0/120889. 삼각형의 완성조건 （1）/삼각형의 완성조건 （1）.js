function solution(sides) {
    const A = sides.sort((a, b) => a - b);
    return (A[0] + A[1]) > A[2] ? 1 : 2;
}