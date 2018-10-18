// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.


// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

const isValidParentheses = (lastChar, current) => {
    return (lastChar === "{" && current === "}") || (lastChar === "(" && current === ")") || (lastChar === "[" && current === "]")
}
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if ("({[".includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (!isValidParentheses(stack[stack.length - 1], s[i])) { console.log('nn'); return false }
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(isValid("{{}}"));
console.log(isValid("{}[]()"));