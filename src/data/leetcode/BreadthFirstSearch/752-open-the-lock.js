
// You have a lock in front of you with 4 circular wheels. 
// Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

// The lock initially starts at '0000', a string representing the state of the 4 wheels.

// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

// Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

// Example 1:
// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
// Explanation:
// A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
// Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
// because the wheels of the lock become stuck after the display becomes the dead end "0102".
// Example 2:
// Input: deadends = ["8888"], target = "0009"
// Output: 1
// Explanation:
// We can turn the last wheel in reverse to move from "0000" -> "0009".
// Example 3:
// Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// Output: -1
// Explanation:
// We can't reach the target without getting stuck.
// Example 4:
// Input: deadends = ["0000"], target = "8888"
// Output: -1
// Note:
// The length of deadends will be in the range [1, 500].
// target will not be in the list deadends.
// Every string in deadends and the string target will be a string of 4 digits from the 10,000 possibilities '0000' to '9999'.

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


// const SKIP = 'SKIP';
// const DEFAULT = -1;

// var openLock = function(deadends, target) {
//     // sanity check
//     let start = '0000';
//     let counter = 0;
//     let queue = [start];
//     let visited = [start];
//     let dead = {};
//     for (let d = 0; d < deadends.length; d++) {
//         dead[deadends[d]] = deadends[d];
//     }

//     while(queue.length > 0) {
//         counter++;
//         let size = queue.length;
//         for (let i = 0; i < size; i++) {
//             let combination = queue.pop();
//             for (let j = 0; j < 4; j++) {
//                 for(let k = -1; k <= 1; k = k + 2) {
//                     let next = combination;
//                     next = setCharAt(next, j,  (next[j] - '0' + k + 10) % 10);
//                     if (next === target) return counter;
//                     if (dead[next]) { console.log(dead[next]); }
//                     if (visited[next] !== undefined) continue;
//                     queue.push(next);
//                     visited[next] = next;
//                 }
//             }
//         }
//     }

//     return -1;
// };

const SKIP = 'SKIP';
const DEFAULT = -1;

function openLock(deadends, target) {
  const visited = deadends.reduce((result, key) => {
    if (!result[key]) {
      result[key] = SKIP;
    }

    return result;
  }, {});

  if (visited['0000'] || visited[target]) {
    return DEFAULT;
  }

  const queue = ['0000'];
  visited['0000'] = 0;

  while (queue.length) {
    const current = queue.shift();
    const len = visited[current];

    if (current === target) {
      return len;
    }

    const nexts = getNexts(current);
    console.log(nexts);
    queue.push.apply(queue, nexts.filter((n) => {
      if (!visited[n]) {
        visited[n] = len + 1;
        return true;
      }
    }));
  }

  return DEFAULT;
}

function getNexts(s) {
  const result = [];
  let sb = s;

  for (let i = 0; i < s.length; i++) {
    const c = parseInt(s[i]);
    const cString = c.toString();
    const a = c === 9 ? '0' : (c + 1).toString();
    const b = c === 0 ? '9' : (c - 1).toString();
    sb = replaceAt(sb, i, a);
    result.push(sb);
    sb = replaceAt(sb, i, b);
    result.push(sb);
    sb = replaceAt(sb, i, cString);
  }

  return result;
}

function replaceAt(string, index, replacement) {
  const beginning = string.substring(0, index);
  const end = string.substring(index + replacement.length);
  return `${beginning}${replacement}${end}`;
}


const deadends = ["0201","0101","0102","1212","2002"];
const target = "0202";

console.log(openLock(deadends, target));
