import axios from "axios";

export function ProductsNew(props) {

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("form submitted");
    const params = new FormData(event.target);
    props.onCreateNewProduct(params);
    // axios.post("http://localhost:3000/products.json", params).then (response=>{
      
    //   console.log(response.data)
    // });
    event.target.reset;
  }
  return (
    <div>
      <h1>New Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name ="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
       
        <div>
        supplier_id: <input name="supplier_id" type="text" />
        </div>
        {/* <div>
        images: <input name="images" type="url" />
        </div> */}
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
}