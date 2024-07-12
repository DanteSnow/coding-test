function solution(myString, pat) {
    const answer = [];
    const X = myString.split("");
    for (let i = 0; i < X.length; i++) {
        if (X[i] === "A") {
            answer.push("B");
        } else if (X[i] === "B") {
            answer.push("A");
        }
    }
    return answer.join("").includes(pat) ? 1 : 0;
};