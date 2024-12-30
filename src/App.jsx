import "./App.css";
import {NavLink, Route,Routes} from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import Support from "./Components/Support";
import Labs from "./Components/Labs";
import NotFound from "./Components/NotFound";
import Main from "./Components/Main";
//import { Link } from "react-router-dom";

 
function App() {
  return (
   <div className="App">
   <nav>
    <ul>
    
 
      


      <li>

      {/* link "Home" to first route tag */}
      {/* <Link to="/">Home</Link>   */}
      <NavLink to="/">Home</NavLink>
      </li>

      <li>
      {/* <Link to ="/about">About</Link> */}
      <NavLink to ="/about">About</NavLink> 
      </li>

      <li>
      {/* <Link to="/support">Support</Link> */}
      <NavLink to="/support">Support</NavLink>
      </li>

      
      <li>
      {/* <Link to="/labs">Labs</Link> */}
      <NavLink to="/labs">Labs</NavLink>
      </li>

    </ul>
   </nav>
    

    {/* if path="/" then render div element */}

    {/* ye samaj ne ke liye */}

    {/* render home component.  */}
    {/* <Route path="/" element={<div>Home page</div>}></Route> */}
    {/* <Route path="/support" element={<div>Support </div>} /> */}
    {/* <Route path="/about" element={<div>About </div>} /> */}
    {/* <Route path="/labs" element={<div>Labs </div>} /> */}
    {/* "*"--->if path not matching with above then render last div  */}
    {/* <Route path="*" element={<div>Not found Page </div>} /> */}


    {/* <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/support" element={<Support></Support> } /> 
    <Route path="/about" element={<About></About> } />
    <Route path="/labs" element={<Labs></Labs> } />
    <Route path="*" element={<NotFound></NotFound>}></Route> */}


   {/* -----------------------------------------------------------Nested Routing */}
    <Routes>

    {/* home vale ka  "route"closing tag last main  put karoo ,iska matlab baaki routes children ho gaye home ke */}
    {/* but baaki components pe abb click karne par sirf home component hi render ho raha */}
    {/* to render child router we use outlet tag inside parent component,isse kya hoga  ki child component ke saath parent always render */}
    {/* so what sir did he removed content inside Home component,so he was able to render child component but not parent component */}
    {/* so sir  created Main.js file copied the content of Home.js into Main.js and render Main component
    index keyword  makes route as a  default route */}

    <Route path="/" element={<Main></Main>}>
    <Route index element={<Home></Home>}></Route>

    <Route path="/support" element={<Support></Support> } /> 
    <Route path="/about" element={<About></About> } />
    <Route path="/labs" element={<Labs></Labs> } />
    <Route path="*" element={<NotFound></NotFound>}></Route>

    </Route>
    
          
         
    </Routes>
   </div>
   
  );
}

export default App;
