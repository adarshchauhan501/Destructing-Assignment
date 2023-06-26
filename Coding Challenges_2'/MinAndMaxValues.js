

// Mix and Max values

function findMinMax(array){
    const max = Math.max(...array);
    const min = Math.min(...array);

    return {
        Max_Value : max,
        Min_Value : min
    };
}

//  Example usage

    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const result = findMinMax(inputArray);
    console.log(result);