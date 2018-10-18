// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

const isPalindrome = str => {
    const tempStr = str.replace(/[^\w]/g, '').toLowerCase();
    let left = 0;
    let right = tempStr.length - 1;
    while (left < right) {
        if (tempStr[left] !== tempStr[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome(''));