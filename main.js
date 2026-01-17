import Authentication from "./auth.js";
import { Store, Product, Category } from "./products.js";
const adminUser = new Authentication("admin", "123456");

if (adminUser.login()) {
  //  console.log("Admin");
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
} else {
  console.log("Not admin");
}
