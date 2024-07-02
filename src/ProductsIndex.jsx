
import { useState } from "react";

export function ProductsIndex(props)
{
  console.log(props.products);
  const [searchTerm, setSearchTerm] = useState("")

  return(
    // <div>console.log(props.products)</div>
    // <div>
    //   <h1>All Products</h1>
    //     {/* {props.products.map((product)=>(
         
    //     ))} */}
    //   <div className="row">
    //     <div className="col-sm-6 mb-3 mb-sm-0">
    //       <div className="card">
    //         <div className="card-body">
    //           <h5 className="card-title">Special title treatment</h5>
    //           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //           <a href="#" className="btn btn-primary">Go somewhere</a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-sm-6">
    //       <div className="card">
    //         <div className="card-body">
    //           <h5 className="card-title">Special title treatment</h5>
    //           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //           <a href="#" className="btn btn-primary">Go somewhere</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div>
      
      <h1>All Products</h1>
      <p>Search: <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search by name..." list="names"/></p>
      <datalist id="names">
        {props.products.map(product =>
          <option key={product.id}>{product.name}</option>
          )}
          <option>app</option>
      </datalist>

      <div className="cards">
      
        {props.products
          .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
          <div key={product.id}className="products cards" >
            <p> id : {product.id}</p>
            <p>name: {product.name}</p>
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
            <p>is_discounted: {product.is_discounted}</p>
            <p>total: {product.total}</p>
            {/* <p>item_count: {product.item_count}</p> */}
            <p> supplier_id: {product.supplier_id}</p> <br />
            <img src= {product.images[0] ? product.images[0].url :
              "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt= ""
              /> <hr />
          </div>
        ))}
      </div>
    </div>
    
  );
}


{/* props.recipes
          .filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(recipe => ( */}
{/* <img src={product.images[0] ? product.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" /> */}