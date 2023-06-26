// Swap The Values


function swapValues( x , y ){
    // Use array destructuring to swap the values
    [x, y] = [y, x];
    
    // Return an array with the swapped values

    return [x, y]
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let a = 6;
let b = 12;

const swappedValue = swapValues(a , b)
console.log(swappedValue);
console.log(a);
console.log(b);


