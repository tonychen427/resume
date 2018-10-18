// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

const reverse = number => {
    let y = Math.abs(number);
    if(y.toString(2).length > 31) return 0;
    let arr = y.toString().split("").reverse();
    if(Number(arr.join("")).toString(2).length > 31) return 0;
    let z = Number(arr.join(""));
    return number >= 0 ? z : -z;
}

console.log(reverse(123));