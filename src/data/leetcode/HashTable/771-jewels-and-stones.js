// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0

const numJewelsInStones = (jStone, sStone ) => {
    let result = 0;
    let map = {};
    for (let j = 0; j < jStone.length; j++) {
        map[jStone[j]] = true;
    }

    for (let s = 0; s < sStone.length; s++) {
        if (map[sStone[s]]) { result++; }
    }
    return result;
}
console.log(numJewelsInStones(null,null));

const numJewelsInStones2 = (jStone, sStone ) => {
    let result = 0;
    for (let i = 0; i < sStone.length; i++) {
        if (jStone.indexOf(sStone[i]) >= 0) {
            result++;
        }
    }
    return result;
}

console.log(numJewelsInStones2(['aB'],['aaBBBBaa']));