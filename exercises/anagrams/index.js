// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB){
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
    //replace any characters we don't need from the string, set it all to lowercase, then split it into an array, sort, the array, then join it back together as a string!
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}


/* function anagrams(stringA, stringB) {

    //build a character map for each string
    const aCharMap = buildMap(stringA);
    const bCharMap = buildMap(stringB);

    //compare how many keys each map has, if unequal, return false
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }

    //iterate over the maps and compare the values!
    for (let char in aCharMap){
        //if the values don't match (in this case, numbers) return false
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;
}

//build a helper function that builds a character map for each string so we can later compare them
function buildMap(str){
    const charMap={};
    
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1; //adds one to the character key of the map, otherwise creates a new key and gives it a value of 1
    }

    return charMap;
} */


module.exports = anagrams;
