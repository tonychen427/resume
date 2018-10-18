
// 1 * 2 * 3 = 6

const factorialize = num => {
    if (num < 0) 
        return -1;
    else if (num === 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}


console.log(factorialize(3)); // 1 * 2 * 3 = 6