
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

const Navbar = () => {

    let [value,setvalue]=useState("false")

let navpath = [
{path:"/products",title:"Products",icon:<CgChevronDown />}, 
{path:"/solutions",title:"Solutions",icon:<CgChevronDown/>},
{path:"/pricing",title:"Pricing",icon:false},
{path:"/learn",title:"Learn",icon:<CgChevronDown/>},
{path:"/contact",title:"Contact",icon:false},
]

let navigateme = () => {
    console.log(99999)

}




return (
    <> 
    <div  className="navstyle" >
    
        <img  className="xyz" src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1" alt="" />
   
        {navpath.map(link => {return (
        <Link className="hide" key ={link.title} to={link.path} ><p  style={{ color:"white",fontSize:"18px",display:"flex"}} >{link.title}{link.icon}</p></Link>
    )} )}

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


    {/* <Productdropdown  Value={value}/>
    <Solutionsdropdown/>
    <Learndropdown/> */}
    {/* <Login/> */}
    {/* <Footer/> */}
    {/* <Price/> */}
    {/* <Signin/> */}
    </>
)

}

export default Navbar;