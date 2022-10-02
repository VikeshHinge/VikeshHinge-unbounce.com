
import { Route, Routes } from "react-router-dom";
import Price from "./Price"
import Homepg from "./Home";
import Login from "./Login";
import Signin from "./signin"
import PrivateRout from "../Authanticate/privateAuth";

const Routepage = () => {



    return(
        <Routes>
            <Route path="/" element={<Homepg/>} ></Route>
            <Route path="/pricing" element={ <PrivateRout><Price/></PrivateRout>}  ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
    )
}

export default Routepage;
