import { ComponentType } from "react";
import { useSelector } from 'react-redux'
import Login from "../components/Login";
import { AppSelector } from "../Store/store";
function ProtectedRoutes(Component:ComponentType):ComponentType{
    const NewComponent = function (){
        const {loggin} = useSelector((state:AppSelector)=>state.auth);
        return (
            <>
                {(loggin)?<Component/>:<Login />}
            </>
        );
    }
    return NewComponent;
}
export default ProtectedRoutes;