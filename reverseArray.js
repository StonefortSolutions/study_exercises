// task: create a program that returns an array reversed
//
// ~cannot use built in JS methods example: .reverse()
// ~must account array for any number of items in array
// ~must RETURN the new array.
const list = ["item1", "item2", "item3"];

//O(n)
function reverseArray(arr){
    const newArray =[];

    for(let i = arr.length-1; i>=0; i--){
        newArray.push(arr[i]);
    }

    return newArray;
}

console.log(reverseArray(list), list);