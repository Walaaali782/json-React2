
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

function Products () {
    const[pro , setproducts] = useState([]);


    const getdata = () => {
      fetch('http://localhost:9010/products')
      .then(res=>res.json())
      .then(data=> setproducts(data));
    
    }
    
    
    
    
    
          useEffect (()=> {
    
            getdata();
         
    
        },[])
    
    
    
      return(
     
    
    <div className="product">

        <div className="container">
    
        <div className="row">
    
    
    
    
                {pro.map((product) =>{
                    return(
                        <motion.div
                
                        layout
                        animate={{ transform: "scale(1)" }}
                        initial={{ transform: "scale(0)" }}
                        transition={{ type: "spring" ,damping:8}}
                         className="col-3" key={product.id}>
    
    
    
    <div className="card" >
    <div className="container">
    <button className="btn prolack" >{product.id}</button>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        </div>
        <p className="card-product">Description: {product.description}</p>
        <p className="card-product">Price : {product.price}</p>
        <p className="card-product">Category :{product.category}</p>
        <p className="card-product">Stock :{product.stock}</p>
    
      </div>
    
    </div>
    
    
    
    
    
    
    
    
                     </motion.div>
                    );
                }) }
    
    </div>
    </div>
    
    </div>
    
    
    
    
    
        )
    }
    

export default Products;
