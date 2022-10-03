
import { Route, Routes } from "react-router-dom";
import Price from "./Price"
import Homepg from "./Home";
import Login from "./Login";
import Signin from "./signin"
import PrivateRout from "../Authanticate/privateAuth";
import CreateAccount from "./createAcc"

const Routepage = () => {



    return(
        <Routes>
            <Route path="/" element={<Homepg/>} ></Route>
            <Route path="/pricing" element={ <PrivateRout><Price/></PrivateRout>}  ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route Path="/edit?_ga=1325374889456bgggjdfiuurk567" element={<CreateAccount/>} ></Route>
        </Routes>
    )
}

export default Routepage;
