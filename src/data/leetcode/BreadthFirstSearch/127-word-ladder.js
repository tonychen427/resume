// // https://www.youtube.com/watch?v=vWPCm69MSfs

// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
// -----------

// Example 2:
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

// function ladderLength(beginWord, endWord, wordList) {
//     let len = 1;
//     let result = [];
//     let queue = [beginWord];
//     const dict = new Set(wordList);
//     const seen = new Set(queue);
//     while (queue.length) {
//       const next = [];
//       for (let v of queue) {
//         if (v === endWord) {
//           console.log(result);
//           return len;
//         }
        
//         const arr = v.split('');
//         for (let i = 0; i < arr.length; i++) {
//           for (let d = 0; d < 26; d++) {
//             arr[i] = String.fromCharCode(97+d);
//             const nv = arr.join('');
//             if (!seen.has(nv) && dict.has(nv)) {
//               next.push(nv);
//               seen.add(nv);
//             }
//             arr[i] = v[i];
//           }
//         }
//         result.push(...next);
//       }
//       queue = next;
//       len++;
//     }
    
//     return 0;
//   }

const swapLetterInWord = (string, index, replace) =>{
  return string.substring(0, index) + replace + string.substring(index + 1);
}
const ladderLength = (beginWord, endWorld, wordList) => {
    wordList.splice(wordList.indexOf(beginWord), 1);
    let level = 1;
    let current = 1;
    let next = 0;
    let queue = [beginWord];
    while(queue.length > 0) {
      let word = queue.shift();
      current--;
      for (let i = 0; i < word.length; i++) {
        for (let j = 'a'.charCodeAt(0); j < 'z'.charCodeAt(0); j++) {
          let temp = swapLetterInWord(word, i, String.fromCharCode(j));
          if (wordList.indexOf(temp) > -1) {
            if (temp === endWorld) return level + 1;
            next++;
            queue.push(temp);
            wordList.splice(wordList.indexOf(temp), 1);
          }
        }
      }
      if (current === 0) {
        current = next;
        next = 0;
        level++;
      }
    }
    return 0;
}
console.log(ladderLength("hit", "cog", ["hit","hot","dot","dog","lot","log","cog"]));