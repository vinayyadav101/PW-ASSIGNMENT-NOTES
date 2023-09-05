const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };

console.log("Below are the product details.");
for (let keys of Object.keys(productDetails)) {
  console.log(`${keys} : ${productDetails[keys]}`);
}

//  output : 
//  Below are the product details.
//  name: Apple 2020 MacBook Air Laptop
//  price: 82000
//  color: Grey
//  hardDisk: 256 GB