function solution(num_list) {
    let even = 0;
    let odd = 0;
    let answer = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even ++;
        } else {
            odd ++;
        }
    }
    
    answer.push(even, odd);
    
    return answer;
}