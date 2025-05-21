import { useProductStore } from "../store/product";
import React,{useState} from "react";
const ProductCard = ({product}) =>{
    const {deleteProduct,updateProducts} = useProductStore()
    const handleDeleteProduct = async (pid) => {
        const {success, message}= await deleteProduct(pid);
        alert(success,message);
    }
    const [UpdateProduct, setUpdateProduct] = useState(product);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleButtonClick = () => {
      setShowOverlay(true);
    };
  
    const handleCloseOverlay = () => {
      setShowOverlay(false);
    };

    const handleUpdateProduct =async (pid, UpdateProduct)=>{
      await updateProducts(pid,UpdateProduct)
      handleCloseOverlay();
    }
    return(

        <div>
          <div className="project-card ">
           <img src={product.image} alt={product.name} className="project-image" width="300" />

            <p className="project-description">{product.name}</p>
            <p className="project-description">{product.price}</p>
           
        <button  onClick={handleButtonClick} className=" project-link ">
          Edit </button>
      
    
            <button onClick={() => handleDeleteProduct(product._id)} className=" project-link " >Remove</button>
          </div>
           
            <div style={styles.container}>
      {/* Main Button */}
     

      {/* Overlay */}
      {showOverlay && (
        <div style={styles.overlay}>
          <div style={styles.overlayContent}>
            <p>Update Content</p>
            <input
              type="text"
              value={UpdateProduct.name}
              style={styles.input}
              onChange={(e) => setUpdateProduct({...UpdateProduct, name:e.target.value})}
            />
            <br />
            <input
              type="text"
              value={UpdateProduct.price}
              style={styles.input}
              onChange={(e) => setUpdateProduct({...UpdateProduct, price:e.target.value})}
            />
       <br />
         <input
              type="text"
              value={UpdateProduct.image}
              style={styles.input}
              onChange={(e) => setUpdateProduct({...UpdateProduct, image:e.target.value})}
            />
            <div></div>
            <button style={styles.closeButton} onClick={()=>handleUpdateProduct(product._id,UpdateProduct)}>
              Update
            </button>
            <button style={styles.closeButton} onClick={handleCloseOverlay}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>

        </div>
    )
}
const styles = {
    
    card: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    overlayContent: {
      
      backgroundColor: "green",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "700px",
      textAlign: "center",
    },
    input: {
      width: "50%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
    },
    closeButton: {
     
      margin:"10px",
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#FF5733",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
export default ProductCard;