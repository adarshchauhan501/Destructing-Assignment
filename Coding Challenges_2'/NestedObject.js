 
// ++++++++++++++++++++ Nested Object +++++++++++++++++++ 

 function extractPersonInfo(person){

    const {name, address: {street} } = person;

    return {
        name:name,
        street: street
    };


 };


 // Example usgae

 const personObject = {
    name: "Adarsh Singh",
    address: {
        street: "123 Main street ",
        City: "Lucknow",
        Country: "India"
    }
 }

 const extractedInfo = extractPersonInfo(personObject);
 console.log(extractedInfo);