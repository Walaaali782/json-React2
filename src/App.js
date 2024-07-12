import React  from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Persons from './components/Persons';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Locations from './components/Locations';


function App()  {

 
  return (
  <>
  <div className='App ' >
<div className='row ' >
<div className='container ' >

<h1> Jsons </h1>
<div className='col-2 sidebar' >
<Sidebar/>
</div>

<div className='col-10 half' >

         <Routes>
        <Route path="/" element={<>
         <Persons/>
        
        </>} />     
   

        
        <Route path="/Products" element={<>
         <Products/>
        </>} />
           
        <Route path="/Locations" element={<>
         <Locations/>
        </>} />

        </Routes> 
    
      

</div>
</div>



</div>


</div>

</>
  )
 
  
}

export default App;
