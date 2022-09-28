
import {Link} from "react-router-dom";
import { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import Productdropdown from "./navdropdown/productDropdown"
import Solutionsdropdown from "./navdropdown/solutionsDropdown";
import Learndropdown from "./navdropdown/LearnDropdown";
import Footer from "./footer";


const Navbar = () => {

    let [value,setvalue]=useState("false")

let navpath = [
{path:"",title:"Products",icon:<CgChevronDown/>}, 
{path:"",title:"Solutions",icon:<CgChevronDown/>},
{path:"",title:"Pricing",icon:false},
{path:"",title:"Learn",icon:<CgChevronDown/>},
{path:"",title:"Contact",icon:false},
]

let navstyle = {
    width:"100%",
    display:"flex",
    justifyContent:"start",
    gap:"40px",
    backgroundColor:"#303030",
    paddingTop:"10px",
    paddingBottom:"10px"
}

let xyz = {
    width:"16%",
    marginLeft:"120px"
}
let icon ={
    margin:"auto",
    color:"white",
    marginLeft:"120px"
}
let btnstyle1={
    margin:"auto",
    width:"80px",
    height:"40px",
    fontSize:"15px",
    fontWeight:"bolder",
    backgroundColor:"#303030",
    border:"2px solid white",
    color:"white"
}
let btnstyle2={
    margin:"auto",
    height:"40px",
    fontSize:"15px",
    fontWeight:"bolder",
    backgroundColor:"white",
    border:"2px solid white",
    borderRadius:"2px",
    color:"#303030"
}

return (
    <> 
    <div  style={navstyle} >
      <img  style={xyz} src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1" alt="" />
        {navpath.map(link => {return (
        <Link key ={link.title} to={link.path} ><p  style={{ color:"white",fontSize:"18px"}} >{link.title}{link.icon}</p></Link>
    )} )}
    <div style={{display:"flex",gap:"13px"}}>
    <ImSearch  style={icon} size="20px" />
    <button style={btnstyle1} >Log In</button>
    <button style={btnstyle2} >Start My Free Trial</button>
    </div>
    </div>
    <Productdropdown  Value={value}/>
    <Solutionsdropdown/>
    <Learndropdown/>
    <Footer/>
    </>
)

}

export default Navbar;