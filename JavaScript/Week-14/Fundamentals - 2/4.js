    const products = [
      { Name: "Laptop", Price: 120000 },
      { Name: "Mobile", Price: 70000 },
      { Name: "Laptop Bag", Price: 20000 },
      { Name: "Watch", Price: 20000 },
      { Name: "MObile Charger", Price: 1500 },
    ];

    let maxProduct = { Name: "", Price: -Infinity };
    let minProduct = { Name: "", Price: Infinity };

    for (const product of products) {
        if (product.Price > maxProduct.Price) {
            maxProduct = product;
      }
      if (product.Price < minProduct.Price) {
            minProduct = product;
      }
    }
  
  console.log(`The product with maximum ammount is ${maxProduct.Name} which is priced at Rs. ${maxProduct.Price}`);
  // output : The product with maximum ammount is laptop which is priced at Rs. 120000
  
  console.log(`The product with minimum ammount is ${minProduct.Name} which is priced at Rs. ${minProduct.Price}`);
  // output : The product with maximum ammount is Mobile Charger which is priced at Rs. 1500