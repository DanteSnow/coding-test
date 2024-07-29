function solution(n, t) {
    let before = n;
    let after = 0;
    
    for (let i = 1; i <= t; i ++) {
       after = before * 2;
        before = after;
    }
    
    return after;
}