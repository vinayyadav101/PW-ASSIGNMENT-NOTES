const car = {
    make: "suzuki",
    model: "alto K10",
    year: 2021
}
function displayCarProperties(car) {
    for (const property in car) {                             
      console.log(`${property}: ${car[property]}`);
    }
  }

  displayCarProperties(car);

    // output : 
    // make: suzuki
    // model: alto K10
    // year: 2021