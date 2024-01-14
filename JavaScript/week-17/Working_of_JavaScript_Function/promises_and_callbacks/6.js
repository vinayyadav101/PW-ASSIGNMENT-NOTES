async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const siteData = await response.json();
    console.log(siteData);
  } 

  fetchData()