function solution(price) {
    let pay = 0;
    
    if (price >= 100000 && price < 300000) {
        pay = price - (price * 0.05);
    } else if (price >= 300000 && price < 500000) {
        pay = price - (price * 0.1);
    } else if (price >= 500000) {
        pay = price - (price * 0.2);
    } else {
        pay = price;
    }
    
    return Math.floor(pay);
}