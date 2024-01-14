const doubleValueOfArray = (arr , calback)=> {
    const doubalValue = arr.forEach((el)=>{
            return calback(el)
    })
    return doubalValue
}

const calback = (value)=> {
    return value * 2
}

console.log(doubleValueOfArray([2,4,6] , calback));