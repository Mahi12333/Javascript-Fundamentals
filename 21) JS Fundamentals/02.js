
function testRegex(pattern, str) {
    let regex = new RegExp(pattern);
    return regex.test(str);
}
console.log(testRegex(/\d/, "Hello")); 
console.log(testRegex(/\d/, "Hello123"));  
console.log(testRegex(/world/, "Hello, world!")); 
console.log(testRegex(/[A-Z]/, "hello"));  
console.log(testRegex(/[A-Z]/, "Hello"));  
