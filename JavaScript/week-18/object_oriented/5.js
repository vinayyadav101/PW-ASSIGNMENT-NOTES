function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}


function Inventory() {
    this.products = [];
}


Inventory.prototype.addProduct = function (product) {
    if (product instanceof Product) {
        this.products.push(product);
        console.log(`Added ${product.name} to the inventory.`);
    } else {
        console.log('Invalid product. Please provide a valid Product object.');
    }
};


Inventory.prototype.deleteProduct = function (productName) {
    const index = this.products.findIndex(product => product.name === productName);
    if (index !== -1) {
        this.products.splice(index, 1);
        console.log(`Deleted ${productName} from the inventory.`);
    } else {
        console.log(`${productName} not found in the inventory.`);
    }
};


const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 899, 10);
const product2 = new Product('Book', 'Books', 20, 50);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteProduct('Laptop');

