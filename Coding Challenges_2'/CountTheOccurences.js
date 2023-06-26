//  Word Count Map Generator

function countWords(text){
    const wordCounts = {}
    const words = text.split(' ');


    for(let i = 0 ; i < words.length; i++){
        const word = words[i];
        wordCounts[word] = (wordCounts[word] || 0 ) + 1;
    }

    return wordCounts
}


//++++++++++++++++++++++++++++++++++
// Example 
let text = "Hello world , this is Adarsh Singh. I live in Lucknow.Currently I am learning Coding from online plateform 'PW Skills' . Coding is very easy for who is writing code per day unless it will be very tough for everyone " 

let wordCounts = countWords(text)
console.log(wordCounts);