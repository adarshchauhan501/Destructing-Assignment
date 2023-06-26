// Function for removing duplicate element.

function removeDuplicates(array){
    const uniqueSet = new Set(array);
    const UniqueArray = Array.from(uniqueSet);

    return UniqueArray;
}

// Example usage 

const inputArray = [1, 2, 2, 2, 3, 3, 4, 5, 6,  7, 7, 7, 8, 8, 9,];

const UniqueElements = removeDuplicates(inputArray);
console.log(UniqueElements);
