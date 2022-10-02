
import {createContext,useState} from "react";

const Authcontext = createContext()

let Authcontextprovider = ({children}) => {
let [status,setstatus] = useState(false);

const toggleStatus = () => {
    setstatus(true)
}
console.log(status)

return (
    <Authcontext.Provider  value={{status,toggleStatus}} >{children}</Authcontext.Provider>
)

};

export default Authcontext;
export {Authcontextprovider};



