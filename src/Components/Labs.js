import React  from "react";
import { useNavigate } from "react-router-dom";

const Labs=()=>
{
    const navigate=useNavigate();

    function clickhandler()
    {
        navigate("/support");
    }

    function backkhandler()
    {
        navigate(-1);
    }
    return(
        <div>

        <div>
        This is  lab page
        </div>

        <div>
        <br/>
        <button onClick={clickhandler} style={{ border: '1px solid black',padding: '0.5rem' } }>Move to support</button>
        <br/>
        <br/>

        <button onClick={backkhandler} style={{ border: '1px solid black',padding : '0.5rem'} }>Move back</button>
        
    
        
        </div>
        
        </div>
    )
}

export default Labs