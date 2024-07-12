import { Link } from 'react-router-dom';

// import { useEffect, useState } from "react";

function Sidebar() {
    return(

<div>
    <h3 className='per'> <Link className='' to={`/`}> Persons </Link> </h3>


    <h3 className='pro'>  <Link className='' to={`/Products`} > Products </Link> </h3>

    <h3 className='location'> <Link className='' to={`/Locations`} > Locations </Link> </h3>







</div>


    )
}
export default Sidebar;