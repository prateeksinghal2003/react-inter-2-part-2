import React  from "react";
import { Outlet } from "react-router-dom";

const Main=()=>
{
    return(
     
       <div>
       <Outlet>
       This is  home page
       </Outlet>
       
       </div>
    
      
      )
        
}

export default Main