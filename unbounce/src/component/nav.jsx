
import {Link, Navigate} from "react-router-dom";
import { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { IoReorderFourSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import Productdropdown from "./navdropdown/productDropdown"
import Solutionsdropdown from "./navdropdown/solutionsDropdown";
import Learndropdown from "./navdropdown/LearnDropdown";
import Footer from "./footer";
import Login from "./Login";
import Price from "./Price";
import Signin from "./signin";
import "./nav.css"


let navpath = [
    {path:"/products",title:"Products",icon:<CgChevronDown />}, 
    {path:"/solutions",title:"Solutions",icon:<CgChevronDown/>},
    {path:"/pricing",title:"Pricing",icon:false},
    {path:"/learn",title:"Learn",icon:<CgChevronDown/>},
    {path:"/contact",title:"Contact",icon:false},
    ]

const Navbar = () => {

    let [isDrop,setIsDrop]=useState(false)
    let [iso_Drop,setIso_Drop]=useState(false)
    let [isl_Drop,setIsl_Drop]=useState(false)

let navigateme = () => {
    console.log(99999)

}


// let displayDD = () => {
//     setIsDrop(!isDrop);
//     console.log(isDrop);
// }



return (
    <div> 
    <div  className="navstyle"  >
    
        <img  className="xyz" src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1" alt="" />
   
       <Link  className="hide navLink" >

       <p  onMouseEnter={()=>setIsDrop(true)} onMouseLeave={()=> setIsDrop(false)} >{navpath[0].title}{navpath[0].icon}
       <div  className="display-product" >
       <Productdropdown isDrop={isDrop}/>
       </div>
       </p>

       <p  onMouseEnter={()=>setIso_Drop(true)} onMouseLeave={()=> setIso_Drop(false)} >{navpath[1].title}{navpath[1].icon}
       <div  className="display-sol">
       <Solutionsdropdown  iso_Drop={iso_Drop}/>
       </div>
       </p>
       
       <p>{navpath[2].title}{navpath[2].icon}</p>

       <p  onMouseEnter={()=>setIsl_Drop(true)} onMouseLeave={()=> setIsl_Drop(false)} >{navpath[3].title}{navpath[3].icon}
       <div  className="display-product">
       <Learndropdown isl_Drop={isl_Drop}/>
       </div>
       </p>

       <p>{navpath[4].title}{navpath[4].icon}</p>
       </Link>




    <div className="iconbox">
          <ImSearch   size="30px" />
          <button onClick={navigateme} className="btnstyle1 hide" >Log In</button>
          <button className="btnstyle2 hide">Start My Free Trial</button>
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