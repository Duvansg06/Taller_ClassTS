interface Product {
    id : number;
    name : string;
    price : number;
    categoria : string;
}

interface Inventory {
    products: Product[];

    addProduct: (product : Product) => void;

    buscarProduct: (id: number) => Product | undefined;
}

const inventory: Inventory = {
    products: [],


    addProduct:(product: Product) => {
        inventory.products.push(product);
        console.log(`Producto anadido: ${product.name}`);
    },


    buscarProduct(id: number) {
        return this.products.find(product => product.id === id);
    }

};

const product1: Product = { id: 1, name: "Laptop", price: 999.99, categoria:"telefonia"};
const product2: Product = { id: 2, name: "Smartphone", price: 499.99, categoria: "telefonia"};

inventory.addProduct(product1);
inventory.addProduct(product2);

const foundProduct = inventory.buscarProduct(2);
console.log(foundProduct ? `Producto encontrado: ${foundProduct.name}` : "Producto no encontrado");