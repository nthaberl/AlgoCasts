// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* function chunk(array, size) {
    //step 1: declare a new array to store chunked
    const chunked = [];

    for (let element of array){
        //retrieve last element of chunked array
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size){
            chunked.push([element]); //immediately pushing in a new chunk within an array
        }
        else {
            last.push(element);
        }
    }

    return chunked
} */

function chunk(array, size){
    let index = 0;
    const chunked = [];

    while (index < array.length){
        chunk.push(array.slice(index, index + size)); //.slice() produces an array for us, first argument is starting index, second argument provides the stopping point, EXCLUDING that index
        // console.log(chunked);
        index += size;
        // console.log("index" + index)
    }
    return chunked;
}

module.exports = chunk;
