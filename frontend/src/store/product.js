import {create} from "zustand";

export const useProductStore = create((set)=>  ({

    products: [],
    setProducts: (products) => set({products}),
    createProduct: async(newProduct) => {

        if (!newProduct.name || !newProduct.image || !newProduct.price){
            return {success: false, message:"please fill the blank"}
        }

        const res = await fetch("https://mern-back-q5jn.onrender.com/api/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
               
            },
            body:JSON.stringify(newProduct),
        });

        const data = await res.json();
        set((state)=> ({product:[...state.products,data.data]}));
        return {success: true, message: "product created successfully."}
    },
    fetchProducts: async ()=>{
        const res = await fetch("https://mern-back-q5jn.onrender.com/api/products");
        const data = await res.json();
        set({products:data.data});
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`https://mern-back-q5jn.onrender.com/api/products/${pid}`,{
            method:"DELETE"
        });
     const data = await res.json();
     if(!data.success) return {success:false, message:data.message};

     set(state => ({products: state.products.filter(product=>product._id !== pid)}));//this code to refresh after a action. 
     return {success:true, message: data.message}
    },
    updateProducts: async (pid,updateProducts)=>{
        const res = await fetch (`https://mern-back-q5jn.onrender.com/api/products/${pid}`,{

            method:"PUT",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify(updateProducts)
        });
        const data = await res.json();
        if(!data.success) return {success:false,message:data.message}
        //this code to refresh after a action. 
        set(state=>({
            products:state.products.map((product) => (product._id === pid ? data.data : product))
        }))
    },
}));
