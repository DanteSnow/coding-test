// const solution = (rny_string) => rny_string.replaceAll("m", "rn");

function solution(rny_string) {
    let answer = [];
    const prmArray = rny_string.split("");
    
    for (let i = 0; i < prmArray.length; i++) {
        if (prmArray[i] === "m") {
            answer.push("r","n")
        } else {
            answer.push(prmArray[i]);
        }
    }
    
    return answer.join("");
}