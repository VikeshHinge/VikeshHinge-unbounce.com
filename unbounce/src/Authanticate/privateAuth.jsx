import Authcontext from "./authantication";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const PrivateRout = ({children}) => {
 let {status} = useContext(Authcontext);
if(!status){
    return <Navigate to="/login" />
}

 return children;

};

export default PrivateRout;