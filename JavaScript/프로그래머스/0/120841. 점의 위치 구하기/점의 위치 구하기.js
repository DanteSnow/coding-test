function solution(dot) {
    let answer = 0;
    let xPoint = dot[0];
    let yPoint = dot[1];
    
    if (xPoint > 0 && yPoint > 0) {
        answer = 1;
    } else if (xPoint < 0 && yPoint > 0) {
        answer = 2;
    } else if (xPoint < 0 && yPoint < 0) {
        answer = 3;
    } else {
        answer = 4;
    }
    return answer;
}