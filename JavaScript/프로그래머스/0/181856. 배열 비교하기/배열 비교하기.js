function solution(arr1, arr2) {
    let FirstArrayLength = arr1.length;
    let FirstArraySum = arr1.reduce((a, b) => a + b);
    let SecondArrayLength = arr2.length;
    let SecondArraySum = arr2.reduce((a, b) => a + b);
    
    if (FirstArrayLength < SecondArrayLength) {
        return -1;
    } else if (FirstArrayLength > SecondArrayLength) {
        return 1;
    } else if (FirstArrayLength === SecondArrayLength) {
        if (FirstArraySum > SecondArraySum) {
            return 1;
        } else if (FirstArraySum < SecondArraySum) {
            return -1;
        } else if (FirstArraySum === SecondArraySum) {
            return 0;
        }
    }
}