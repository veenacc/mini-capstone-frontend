
export function ProductsIndex(props)
{
  console.log(props.products);
  return(
    // <div>console.log(props.products)</div>
    <div>
      <h1>All Products</h1>
      <div className="cards">
      {props.products.map((product) => (
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

{/* <img src={product.images[0] ? product.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" /> */}