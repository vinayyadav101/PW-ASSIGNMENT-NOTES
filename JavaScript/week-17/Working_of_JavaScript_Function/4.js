{
    console.log(x); //Cannot access 'x' before initialization
    console.log(y); //undefined
    console.log(z); //Cannot access 'z' before initialization
    
    
    let x = 1
    var y = 2
    const z = 3


    console.log(x); //1
    console.log(y); //5
    console.log(z); //2
}