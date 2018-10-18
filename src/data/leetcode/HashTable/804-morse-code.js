// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

var uniqueMorseRepresentations = function(words) {
    let morseCodeLookup = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let translatedWords = [];
    words.forEach(word => {
        let wordSplit = word.split('');
        let compiledWord = '';
        wordSplit.forEach((character, idx) => {
            compiledWord += morseCodeLookup[word.charCodeAt(idx) - 97];
        })
        translatedWords.push(compiledWord);
    });
    
    let filteredWords = [];
    translatedWords.forEach(word => {
        if(!filteredWords.includes(word)) filteredWords.push(word);
    })
    return filteredWords.length;
};

console.log(uniqueMorseRepresentations(''));