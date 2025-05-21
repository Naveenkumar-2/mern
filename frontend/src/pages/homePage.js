import {Link} from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = ()=>{

    const {fetchProducts,products} = useProductStore();
    useEffect(()=>{
        fetchProducts()
    },[fetchProducts]);

    console.log("products",products);
    return (<div >
        <div className="mt-10">
            {products.map((product)=> (
                <ProductCard key={product._id} product={product} />
            ))} 

            {products.length === 0 && (
                <div className="flex justify-center">
                <h1 className="text-center text-white">No products founds 😓.</h1>
                <Link to='/create'className=" underline"> <p className="text-white">Create Product</p></Link>
                </div>
                
            )

            }
        </div>
         
    </div>)
    
}

export default HomePage;