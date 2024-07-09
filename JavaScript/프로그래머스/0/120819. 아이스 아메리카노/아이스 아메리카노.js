function solution(money) {
    
    
    const count = Math.floor(money / 5500);
    const change = money - 5500 * count;
    let answer = [count, change];
    return answer;
}