import {Link} from "react-router-dom"
import { CgChevronDown } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import "./mindrop.css";


let navpath = [
    {path:"/products",title:"Products",icon:<CgChevronDown />}, 
    {path:"/solutions",title:"Solutions",icon:<CgChevronDown/>},
    {path:"/pricing",title:"Pricing",icon:false},
    {path:"/learn",title:"Learn",icon:<CgChevronDown/>},
    {path:"/contact",title:"Contact",icon:false},
    ];



let MinDrop = () => {



return (
    <div  className="notvisible" >
           <div  style={{paddingBottom:"10px"}}>
           <div  style={{display:"flex",gap:"10px",marginBottom:"10px"}} ><ImSearch   size="25px" /><input type="text" placeholder="Search..." className="search"/></div>
           <hr/>
           </div>
    <div  className="min_linkbox" >
        {navpath.map((ele,i)=> {
            return(
                <Link  to={ele.path} key={i} className="min_link">{ele.title}</Link>
            )
        })}
    </div>
     
    <div style={{display:"flex",flexFlow:"column"}} >
          <Link to="/pricing" ><button className="min_btn2" >Start My Free Trial</button></Link>
          <Link  to="/login"><button className="min_btn1" >Log In</button></Link>
    </div>

    </div>
)

}

export default MinDrop;