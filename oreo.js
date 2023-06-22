// create a function that returns an array, in which in that array, has pairs of items from the array
// example output: [1,2,3,4] => [[1,2],[3,4]]

//next step, randomize the pairs
// example output: [1,2,3,4] => [[1,3],[2,4]] or [[4,1],[2,3]]

//if an odd number of items in the initial array, have one pair that is a trio
// example output: [1,2,3,4,5] => [[1,3],[2,5,4]]

/**
 * Returns an array of pairs from the given array, randomized, with one trio if the array is odd
 * @param {array} arr
 * @returns {any}
 */
function createPairs(arr) {
    const newArray = [];
    const sortedArr = arr.sort(() => Math.random() - 0.5);
    for (let i = 0; i < sortedArr.length; i += 2) {
        if (i + 1 === sortedArr.length && sortedArr.length % 2 !== 0) {
            newArray[newArray.length - 1].push(sortedArr[i]);
            break;
        }
        newArray.push(sortedArr[i + 1] ? [sortedArr[i], sortedArr[i + 1]] : [sortedArr[i]]);
    }
    return newArray;
}

const items = [1, 2, 3, 3, 4, 5, 6, 7];
const oddItems = [1, 2, 3, 4, 5, 6, 7];
console.log(createPairs(items))
console.log(createPairs(oddItems))