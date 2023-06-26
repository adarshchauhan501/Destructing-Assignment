// Project - 3 [ Access the Random Elements]

function extractElements(arr){
    // Destructure the array into first, second and last elements

    const [first, second, ...rest] = arr;

    // Get the last element form the rest of the array

    const last = rest.pop();

    // Return an array with the extracted values

    return [first, second, last]

}


//++++++++++++++++++++++++++======================


// Example usage

const inpuutArray = [1, 2, 3, 4, 5, 5 , "Adarsh Singh"]

const extracted = extractElements(inpuutArray);

console.log(extracted);