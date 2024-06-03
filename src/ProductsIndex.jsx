
export function ProductsIndex(props)
{
  console.log(props.products);
  return(
    // <div>console.log(props.products)</div>
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <p> id : {product.id}</p>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>description: {product.description}</p>
          <p>is_discounted: {product.is_discounted}</p>
          <p> supplier_id: {product.supplier_id}</p>
          <img src= {product.images} height="300" width="300" /> <hr />
        </div>
      ))}
    </div>
    
    );
}