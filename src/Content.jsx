import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const products = [
    {id:1, name:"apple", price: 10,description: "red delicious apples", is_discounted:"yes" ,supplier_id: 11, images: "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png" },
    {id:2, name:"green apple", price: 20,description: "green delicious apples", is_discounted:"no" ,supplier_id: 21, images: "https://t4.ftcdn.net/jpg/01/07/24/39/360_F_107243962_93O8mMEWlLU1mGgEdwS0dIv37fbLWfaV.jpg" }
     ];
     console.log(products);
  return (
    <main>
  
      <div><ProductsIndex  products={products}/></div>
      
    </main>
  );
}