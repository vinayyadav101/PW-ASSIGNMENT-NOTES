let manipulateString = (str , callback)=>{

        let uppercashString =  str.toLocaleUpperCase();

        return callback(uppercashString)

}
let name1 ="viay"
name1.toLocaleUpperCase

let logString = (str1) =>{
       return `"The manipulate string is : ${str1}"`
}

console.log(manipulateString("vinay" , logString));