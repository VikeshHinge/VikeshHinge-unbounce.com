
import { Route, Routes } from "react-router-dom";
import Price from "./Price"
import Homepg from "./Home";
import Login from "./Login";

const Routepage = () => {



    return(
        <Routes>
            <Route path="/" element={<Homepg/>} ></Route>
            <Route path="/pricing" element={<Price/>}  ></Route>
            <Route path="/login" element={<Login/>} ></Route>
        </Routes>
    )
}

export default Routepage;
