// function solution(my_string) {
//     const vowel = ["a", "e", "i", "o", "u"]
    
//     return my_string.split("").filter(char => !vowel.includes(char)).join("")
// }

















function solution(my_string) {
    return my_string
        .split("")
        .filter(x => !["a", "e", "i", "o", "u"].includes(x))
        .join("")
}