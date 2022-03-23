// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversed+=str[i];
    }
    return reversed
}  */

//can also use the reverse method!!

/* function reverse(str) {
    return str.split("").reverse().join("");
} */

/* function reverse(str) {
    let reversed = "";
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed
} */

function reverse(str) {
    return str.split("").reduce((reversed, character) => character + reversed, '');
}

reverse("acbd")

module.exports = reverse;
