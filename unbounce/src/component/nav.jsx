
import {Link} from "react-router-dom";
import { useState,useContext } from "react";
import { CgChevronDown } from "react-icons/cg";
import { IoReorderFourSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import Productdropdown from "./navdropdown/productDropdown"
import Solutionsdropdown from "./navdropdown/solutionsDropdown";
import Learndropdown from "./navdropdown/LearnDropdown";
import "./nav.css"




let navpath = [
    {path:"/products",title:"Products",icon:<CgChevronDown />}, 
    {path:"/solutions",title:"Solutions",icon:<CgChevronDown/>},
    {path:"/pricing",title:"Pricing",icon:false},
    {path:"/learn",title:"Learn",icon:<CgChevronDown/>},
    {path:"/contact",title:"Contact",icon:false},
    ];

    
const Navbar = () => {

    let [isDrop,setIsDrop]=useState(false)
    let [iso_Drop,setIso_Drop]=useState(false)
    let [isl_Drop,setIsl_Drop]=useState(false)
    let [minDrop,setminDrop] = useState(false)

   


return (
    <div> 
    <div  className="navstyle">
    
       <Link  to="/"> <img  className="xyz" src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1" alt="" /></Link>
   
       <div  className="hide navLink" >

       <p  onMouseEnter={()=>setIsDrop(true)} onMouseLeave={()=> setIsDrop(false)} ><Link className="navLink2" to={navpath[0].path} >{navpath[0].title}{navpath[0].icon}</Link>
       <div  className="display-product" >
       <Productdropdown isDrop={isDrop}/>
       </div>
       </p>

       <p  onMouseEnter={()=>setIso_Drop(true)} onMouseLeave={()=> setIso_Drop(false)} ><Link className="navLink2" to={navpath[1].path} >{navpath[1].title}{navpath[1].icon}</Link>
       <div  className="display-sol">
       <Solutionsdropdown  iso_Drop={iso_Drop}/>
       </div>
       </p>
       
       <p><Link className="navLink2" to={navpath[2].path} >{navpath[2].title}{navpath[2].icon}</Link></p>

       <p  onMouseEnter={()=>setIsl_Drop(true)} onMouseLeave={()=> setIsl_Drop(false)} ><Link className="navLink2" to={navpath[3].path} >{navpath[3].title}{navpath[3].icon}</Link>
       <div  className="display-product">
       <Learndropdown isl_Drop={isl_Drop}/>
       </div>
       </p>

       <p><Link className="navLink2" to={navpath[4].path} >{navpath[4].title}{navpath[4].icon}</Link></p>
       </div>




    <div className="iconbox">
          <ImSearch   size="30px" />
          <Link to="/login"><button className="btnstyle1 hide" >Log In</button></Link>
          <Link to="/pricing" ><button className="btnstyle2 hide">Start My Free Trial</button></Link>
    </div>
    <div className="iconbox2 hidecomp" >
        <ImSearch   size="20px" />
        <IoReorderFourSharp size="20px"  />
    </div>
    </div>
    </div>
)

}

export default Navbar;