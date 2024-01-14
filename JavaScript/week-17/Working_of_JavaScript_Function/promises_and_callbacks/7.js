async function getCombineData() {
    const [data1 , data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.come/todos/1").then((response) => response.json()),
        fetch("https://jsonplaceholder.typicode.come/todos/1").then((response) => response.json()
        ),
    ]);
    const combinedata = {
        todo: data1,
        post: data2,
    };
    return combinedata
}

getCombineData().then(data => console.log(data));