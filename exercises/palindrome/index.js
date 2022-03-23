// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* function palindrome(str) {
    // let current = str[0]
    for (let i = 0; i < str.length/2; i ++){
        current = str[i];
        if (current != str[str.length - 1 - i]){
            return false
        }
    }
    return true
} */


/* function palindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
} */

function palindrome(str){
    //splitting the string at every character, then passing every index of the array into .every() as "char". "i" represents each index
    return str.split("").every((char, i) => {
        return char === str[str.length - i - 1] //-1 offsets the 0 indexing
    })
}

module.exports = palindrome;
