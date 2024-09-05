function outerFunction(name,marks){
    let connector = "got";

    function inner(){
        console.log(`${name} ${connector} ${marks} marks`);
    }
    return inner;
}
let variable = outerFunction("Amit",90)
variable()
let variable1 = outerFunction("Suresh",85)
variable1()
let variable2 = outerFunction("Rahul",89)
variable2()
