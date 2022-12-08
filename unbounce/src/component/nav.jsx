
import {Link, Navigate} from "react-router-dom";
import { useState } from "react";
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
    {path:"/pricing",title:"Pricing"},
    {path:"/learn",title:"Learn",icon:<CgChevronDown/>},
    {path:"/contact",title:"Contact"},
    ];

    
const Navbar = () => {

    const [isDrop,setIsDrop]=useState(false);
    const [iso_Drop,setIso_Drop]=useState(false);
    const [isl_Drop,setIsl_Drop]=useState(false);
    const [minDrop,setminDrop] = useState(false);
    const [minsearch,setminsearch] = useState(false);
    const [scroll,setscroll] = useState(0)
   
   
let Showmindropdown = () => {
     if(!minDrop && !minsearch){
        setminsearch(true)
        setminDrop(true)
     }
    else if(minsearch && !minDrop){
        setminDrop(true)
     }
    else {
        setminsearch(false)
        setminDrop(false)
    }
    
};

let Showsearch = ()=> {
 
    if(!minsearch){
     setminsearch(true)
    }
  else if(minsearch && minDrop){
     setminDrop(false)
    }
    else if(minsearch && !minDrop){
      setminsearch(false)
    }
};


 window.addEventListener('scroll',()=> {
    const scrolled = window.scrollY;
   setscroll(scrolled)
})

// const navigateme = () => {
//     console.log(99999999999)
//     return( <Navigate  to="pricing" />)
    
// }





return (

<div> 

    <div  className={scroll===0?"navstyle":"navstyle2"} >
    
       <Link  to="/"> <img onClick={()=>setminDrop(false)} className="xyz" src={scroll===0?"https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1":"https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"} alt="" /></Link>
   
       <div  className="hide navLink" >

       <p  onMouseEnter={()=>setIsDrop(true)} onMouseLeave={()=> setIsDrop(false)} ><Link className={scroll===0?"navLink2":"navLink22"}  >{navpath[0].title}{navpath[0].icon}</Link>
       <div  className="display-product" >
       <Productdropdown isDrop={isDrop}/>
       </div>
       </p>

       <p  onMouseEnter={()=>setIso_Drop(true)} onMouseLeave={()=> setIso_Drop(false)} ><Link className={scroll===0?"navLink2":"navLink22"} >{navpath[1].title}{navpath[1].icon}</Link>
       <div  className="display-sol">
       <Solutionsdropdown  iso_Drop={iso_Drop}/>
       </div>
       </p>
       
       <p><Link className={scroll===0?"navLink2":"navLink22"} to={navpath[2].path} >{navpath[2].title}{navpath[2].icon}</Link></p>

       <p  onMouseEnter={()=>setIsl_Drop(true)} onMouseLeave={()=> setIsl_Drop(false)} ><Link className={scroll===0?"navLink2":"navLink22"} >{navpath[3].title}{navpath[3].icon}</Link>
       <div  className="display-product">
       <Learndropdown isl_Drop={isl_Drop}/>
       </div>
       </p>

       <p><Link className={scroll===0?"navLink2":"navLink22"} >{navpath[4].title}{navpath[4].icon}</Link></p>
       </div>


     <div  className={scroll===0?"iconbox":"iconbox2max hide"}>
          <ImSearch   size="30px" />
          <Link to="/login"><button className={scroll===0?"btnstyle1 hide":"btnstyle1_2 hide"}>Log In</button></Link>
          <Link to="/pricing" ><button className={scroll===0?"btnstyle2 hide":"btnstyle2_2 hide"}>Start My Free Trial</button></Link>
     </div>
     <div  className={scroll===0?"iconbox2 hidecomp":"iconbox2a2 hidecomp"}   >
        <ImSearch onClick={Showsearch} size="25px" />
        <IoReorderFourSharp onClick={Showmindropdown} size="25px" />

     </div>
       
     </div>
   

        <div  className="notvisible" style={{position:'fixed'}} >

           <div  style={{paddingBottom:"10px",display:minsearch?"block":"none"}}    >
           <div  className="search_div" ><ImSearch   size="25px" /><input type="text" placeholder="Search..." className="search"/></div>
           <hr/>
           </div>

        <div  style={{display:minDrop?"block":"none"}} className='minDrop_fixed'>
        <div  className="min_linkbox"  >
         
            
        <div >
        <Link onClick={()=>setIsDrop(!isDrop)}  className="min_link">Products</Link>
         <Productdropdown  isDrop={isDrop} />
        </div>
        <Link to='/pricing' className="min_link" onClick={Showmindropdown}>Pricing</Link>
    
           {/* <Link onClick={()=>setIsDrop(!isDrop)}  className="min_link">Product</Link> */}
           {/* <div style={{backgroundColor:'red'}}>
            <div onClick={()=>setIsDrop(!isDrop)} className="min_link">Products</div>
          
           </div> */}

         </div>
         <div style={{display:"flex",flexFlow:"column"}} >
          <Link className="fit"  to="/pricing" ><button className={scroll===0?"min_btn2":"min_btn2_2"} >Start My Free Trial</button></Link>
          <Link className="fit"  to="/login"><button    className={scroll===0?"min_btn1":"min_btn1_2"} >Log In</button></Link>
         </div>
     </div>

    </div>


    </div>

) 

}

export default Navbar;