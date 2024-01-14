function gretting(name) {
    return new Promise((resolve) => {
        let gretting = `hello ${name}`
        resolve(gretting)
    })
}
gretting("vinay").then((msg)=> console.log(msg))