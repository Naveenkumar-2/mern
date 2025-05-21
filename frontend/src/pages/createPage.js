import { useState } from "react";
import { useProductStore } from "../store/product";


const CreatePage = () => {
    const[newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
       });
const { createProduct } = useProductStore();
const handleAddProduct =async ()=>{
    if(!createProduct){
        throw new Error('Store is not available');
    }
    const {success,message} =await createProduct(newProduct);
    alert(success,message);
    setNewProduct({name:'',price:'',image:''});
   
};
    return(
        <div className="flex flex-col items-center">
           <h3 className="text-slate-500 font-sans font-bold my-5">Create Product</h3>

           <input 
           className="inputCss"
           placeholder="Product name"
           name="name"
           value={newProduct.name}
           onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
           />

        <input 
           className="inputCss"
           placeholder="Product price"
           name="price"
           value={newProduct.price}
           onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
           />

        <input 

        className="inputCss"
           placeholder="Product image"
           name="image"
           value={newProduct.image}
           onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
           />

           <button className=" rounded-md bg-violet-500 w-[100px] py-2 text-white  hover:bg-slate-600 my-3 " onClick={handleAddProduct} >
            Add Product
           </button>
       
           
    
        </div>
    );
};
export default CreatePage;