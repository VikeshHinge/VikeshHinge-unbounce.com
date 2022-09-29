import {Link} from "react-router-dom";
import "./mystyle.css";
import {useState} from "react";

const user = {
    email:"",
    pw:""
}

const Signin = () => {

let [sigin,setsign] = useState(user)

const Signupfun = (e) => {

// console.log(e.target.name)
// console.log(e.target.value)

setsign({...sigin,[e.target.name]:e.target.value})

}

const userSignin = () =>{
    console.log(sigin)
}



return(
    <div className="flex3" >
        <div className="box4" >
            <div style={{marginTop:"50px"}} > <img  style={{width:"200px",marginBottom:"20px"}}  src="https://d9hhrg4mnvzow.cloudfront.net/unbounce.com/product-selector/7089096e-d22ffb13-logo-unbounce.svg" alt="" /></div>
            <h2>Sign Into Your Unbounce Account</h2>
            <hr style={{width:"60%",marginBottom:"-10px"}} />
            <div  ><p>Need an Unbounce Account?<Link> Create an account</Link></p></div>
            <br /><br />
            <div className="input_box" >
                Email: <br />
                <input name="email" value={sigin.email} onChange={Signupfun} className="input" type="text" /><br /><br />
                Password: <br />
                <input name="pw" className="input" value={sigin.pw}  onChange={Signupfun}  type="text" /><br /><br />
            </div>
            <button onClick={userSignin}  className="btn1" >Sign In</button>
        </div>
        <div  style={{width:"50%"}} >
            <img style={{width:"100%"}}  src="https://d9hhrg4mnvzow.cloudfront.net/signin.unbounce.com/sign-in-advertising-prod/9153dbbb-1280x1440-unbounce-apps-login-image-green-v3-pngpng_1000000000000000000028.png" alt="" />
        </div>
    </div>
)

}

export default Signin;

