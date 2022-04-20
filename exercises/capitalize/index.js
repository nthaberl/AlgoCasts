// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/* function capitalize(str) {
    const words = [];

    //iterating through the string and splitting at every space character and storing it in an array
    //then taking the first character of each word and capitalizing it with .toUpperCase();
    //the combining it with the rest of the word with .slice(), which is taking everything from the first element onwards
    //AND THEN pushing it into the words ARRAY
    for (let word of str.split(" ")){
        words.push(word[0].toUpperCase() + word.slice(1))
    }

    //finally returning the result, which is joining all the elemets(words) in the array into a string
    return words.join(" ")
}
 */

function capitalize(str){
    let result = str[0].toUpperCase();

    //iterating through the string and looking to the left to see if it's a space
    //if it is, capitalize it and add it to result
    //if not, add it to result
    for (let i = 1; i < str.length; i++){
        if (str[i-1] === " "){
            result += str[i].toUpperCase();
        }
        else{
            result += str[i];
        }
    }

    return result
}


module.exports = capitalize;
