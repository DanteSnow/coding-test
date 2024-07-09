function solution(money) {
    const count = Math.floor(money / 5500);
    const change = money - 5500 * count;
    
    return [count, change]
}