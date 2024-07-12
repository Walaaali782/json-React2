
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
function Persons() {



const[pro , setproducts] = useState([]);


const getdata = () => {
  fetch('http://localhost:9000/persons')
  .then(res=>res.json())
  .then(data=> setproducts(data));

}





      useEffect (()=> {

        getdata();
     

    },[])



  return(
 

<div className="persons">
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
<button className="btn btn-primary" >{product.id}</button>
  <div className="card-body ">
    <h5 className="card-title">{product.first_name}    {product.last_name}</h5>
  
    </div>
    <p className="card-text">{product.email}</p>
    <p className="card-text">{product.phone}</p>
    <p className="card-text">{product.address}</p>

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
export default Persons;