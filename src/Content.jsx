import { ProductsIndex } from "./ProductsIndex";
import  axios  from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { Signup } from "./Signup";

//call all functions inside of content
export function Content() {

  const [products, setProducts] = useState([]);

  const handleProductsIndex = ()=>{
    console.log("can i see all products");
    axios.get("http://localhost:3000/products.json").then (
      response => {
        console.log(response.data);
        console.log("I'm in function handleAllposts");
        setProducts(response.data);
      }
    )
    
  }
  // function call :calls function handleProductIndex and sets value of "products"
    useEffect(handleProductsIndex, []) ;
  /* ************************************************************** */

const handleCreateNewProduct=(params)=>{
   axios.post("http://localhost:3000/products.json", params).then (response=>{
      
      console.log(response.data);
      setProducts([...products, response.data]);
    });
}


  // const products = [
    // {id:1, name:"apple", price: 10,description: "red delicious apples", is_discounted:"yes" ,supplier_id: 11, images: "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png" },
    // {id:2, name:"green apple", price: 20,description: "green delicious apples", is_discounted:"no" ,supplier_id: 21, images: "https://t4.ftcdn.net/jpg/01/07/24/39/360_F_107243962_93O8mMEWlLU1mGgEdwS0dIv37fbLWfaV.jpg" }
    //  ];
    //  console.log(products);
  return (
    <main>
      <div><Signup /></div>
      <div>
        <ProductsNew  onCreateNewProduct={handleCreateNewProduct}/>
      </div>
      <div>
        <ProductsIndex  products= {products} />
      </div>
      
    </main>
  );
}