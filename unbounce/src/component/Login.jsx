import {Link} from "react-router-dom";
import "./mystyle.css";
// import {useContext,useState} from "react";
// import Authcontext from "../Authanticate/authantication";

let select = [
    {a:"Login",title:"Smart Builder & Classic Builder",tag:false},
    {a:"Login",title:"Smart Copy",tag:"Formely Snazzy.AI"},
]


const Login = () => {


return(
   <div >
        <div className="flex signin" style={{paddingTop:"30px"}} >
         <div style={{margin:"auto",textAlign:"left"}} >
         <img  style={{width:"200px",marginBottom:"20px"}}  src="https://d9hhrg4mnvzow.cloudfront.net/unbounce.com/product-selector/7089096e-d22ffb13-logo-unbounce.svg" alt="" />
        <p>Choose an account to log into</p>
        <div className="box signin">
            {select.map((ele,i)=> {
                return(
                  <Link to="/signin" >
                        <div key={i} className="divstyle" >
                       <p  style={{fontSize:"12px",textDecoration:"none"}} >{ele.a}</p>
                       <div style={{display:"flex",gap:"5px"}} ><p className="text"  >{ele.title} </p><p className="tag">{ele.tag}</p> </div>
                       </div>
                  </Link>
                )
            })}
        </div>
        <h3 className="links"  >Need Help ?</h3>
         </div>

         <div  style={{width:"50%"}} className="off_img" >
            <img className="img" src="https://d9hhrg4mnvzow.cloudfront.net/new.unbounce.com/sign-in-advertising-prod/661755c0-productselectorlogin.jpg" alt="" />
         </div>

    </div>
   </div>
)

}

export default Login;