// create a function(s) that takes in two main inputs, an array and the number of items in a combo
// return all the possible combinations of those items from that given array
// note: you do not need to accomodate for different positions. [1,2,3] and [2,1,3] would count as the same combination

const array = [1, 2, 3, 4, 5];

//Recursive solution
const combos = (arr, num) => {
    const combinations = [];

    //Recursive function to generate combinations
    const generateCombinations = (currentCombo, start) => {
        //If we have reached the number of items in a combo, push the combo into the combinations array
        if (currentCombo.length === num) {
            combinations.push(currentCombo);
            return;
        }

        //For each item in the array, generate combinations with that item as the first item in the combo
        for (let i = start; i < arr.length; i++) {
            generateCombinations([...currentCombo, arr[i]], i + 1);
        }
    };

    //Start the recursive function with an empty array and the start index of 0
    generateCombinations([], 0);
    return combinations;
};

//Iterative solution
//O(n) time complexity?
const combos2 = (arr, num) => {
    const combinations = [];
    const stack = [];
    let index = 0;

    //While the stack is not empty or we have not reached the end of the array
    while (stack.length > 0 || index < arr.length) {
        //If we have reached the number of items in a combo, push the combo into the combinations array
        if (stack.length === num) {
            //Create a combo from the stack of indices
            const combo = stack.map(i => arr[i]);
            //Push the combo into the combinations array
            combinations.push(combo);
        }

        //If we have reached the end of the array or the stack is full, pop the stack and increment the index
        if (index >= arr.length || stack.length === num) {
            if (stack.length === 0) {
                //If the stack is empty, we are done
                break;
            }
            //Otherwise, pop the stack and increment the index
            index = stack.pop() + 1;
        } else {
        //Otherwise, push the index onto the stack and increment the index
            stack.push(index);
            index++;
        }
    }

    return combinations;
};


console.log("=======TEST 1 RECURSIVE ========");
console.log(combos(array, 2));
console.log(combos(array, 3));
console.log("=======TEST 2 ITERATIVE ========");
console.log(combos2(array, 2));
console.log(combos2(array, 3));