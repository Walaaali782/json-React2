
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

function Locations(){

  const[pro , setproducts] = useState([]);


  const getdata = () => {
    fetch('http://localhost:9020/locations')
    .then(res=>res.json())
    .then(data=> setproducts(data));
  
  }
  
  
  
  
  
        useEffect (()=> {
  
          getdata();
       
  
      },[])
  
  
  
    return(
   
  
  <div className="locations">
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
    <button className="btn local" >{product.location_id}</button>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        </div>
        <p className="card-local">Description: {product.description}</p>
        <p className="card-local">Country : {product.country}</p>
        <p className="card-local">City :{product.city}</p>
       
      
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
export default Locations;