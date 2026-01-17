class Category{
    constructor(name){
        this.name=name;
    }
}

class Product{
    constructor(name,color, category, stock,price){
        this.name=name;
        this.color=color;
        this.category=category;
        this.stock=stock;
        this.price=price;
    }
}

class Store{
   constructor(){
     this.products=[];
     this.categories=[];
     this.cart=[];
   }
   //add category
   
addCategory(category){
    this.categories.push(category)
}

//update category 

updateCategory(oldName, newName){
    const category =this.categories.find(c=>c.name===oldName);
     if(category) category.name=newName;
}
//remove category

removeCategory(name){
    this.categories=this.categories.filter(c=>c.name !==name);
}
//add products

 addProduct(product) {
    this.products.push(product);
  }
  //show products

  showAllProducts() {
    console.log(this.products);
  }

  //remove products
  removeProduct(name) {
    this.products = this.products.filter(p => p.name !== name);
  }

  updateProduct(name, data) {
    const product = this.products.find(p => p.name === name);
    if (!product) return;
    Object.assign(product, data);
  }
 addToCart(productName, quantity) {
    const product = this.products.find(p => p.name === productName);

    if (!product) {
      console.log("Product not found");
      return;
    }

    if (product.stock < quantity) {
      console.log("Not enough stock");
      return;
    }

    product.stock = quantity;

    this.cart.push({
      name: product.name,
      price: product.price,
      quantity
    });

    const subtotal = this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    console.log("Subtotal:", subtotal);
  }
}

const store = new Store();

const electronics = new Category("Electronics");
store.addCategory(electronics);

const phone = new Product("Phone", "Black", electronics, 5, 300);
const laptop = new Product("Laptop", "Black", electronics, 2, 2200);
const mobile = new Product("Mobile", "Blue", electronics, 3, 30000);

store.addProduct(phone);
store.addProduct(laptop);

store.showAllProducts();

store.addToCart("Phone", 2);
store.addToCart("Mobile", 3);
store.addToCart("Laptop", 1);

store.showAllProducts();

export {Category, Product,Store};

