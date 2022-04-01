// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar='';

    for (let char of str) //for ... of is used to iterate through array or string
    {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) //for ... in is used to iterate through iterable object -- char in this instance is the KEY
    {
        if (charMap[char] > max){ //if this is greater than the current max, we will update both values
            max = charMap[char]; //updating max to the number of times that character appears (the value)
            maxChar = char; //updating the character that appears most frequently with the key
        }
    }

    return maxChar;
}

module.exports = maxChar;
