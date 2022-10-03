
import { Route, Routes } from "react-router-dom";
import Price from "./Price"
import Homepg from "./Home";
import Login from "./Login";
import Signin from "./signin"
import PrivateRout from "../Authanticate/privateAuth";
import CreateAccount from "./createAcc"
// import Productdropdown from "./navdropdown/productDropdown";
// import Solutionsdropdown from "./navdropdown/solutionsDropdown";
// import Learndropdown from "./navdropdown/LearnDropdown";
const Routepage = () => {



    return(
        <Routes>
            <Route path="/" element={<Homepg/>} ></Route>
            <Route path="/pricing" element={ <PrivateRout><Price/></PrivateRout>}  ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route Path="/edit?_ga=1325374889456bgggjdfiuurk567" element={<CreateAccount/>} ></Route>
            {/* <Route path="/products"  element={<Productdropdown/>}></Route>
            <Route path="/solution"  element={<Solutionsdropdown/>}></Route>
            <Route path="/learn"  element={<Learndropdown/>}></Route> */}
        </Routes>
    )
}

export default Routepage;
