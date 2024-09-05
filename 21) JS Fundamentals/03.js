
function searchCharacterClasses(str) {
    const digitMatches = str.match(/\d/g); 
    const uppercaseMatches = str.match(/[A-Z]/g); 
    const lowercaseMatches = str.match(/[a-z]/g); 
    const specialCharMatches = str.match(/[^\w\s]/g); 

    return {
        digits: digitMatches,
        uppercaseLetters: uppercaseMatches,
        lowercaseLetters: lowercaseMatches,
        specialCharacters: specialCharMatches
    };
}
const sampleString = "Hello123! How are you?";
const matches = searchCharacterClasses(sampleString);

console.log("Digits:", matches.digits); 
console.log("Uppercase Letters:", matches.uppercaseLetters); 
console.log("Lowercase Letters:", matches.lowercaseLetters); 
console.log("Special Characters:", matches.specialCharacters); 
