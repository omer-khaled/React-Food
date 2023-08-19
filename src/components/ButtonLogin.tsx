import { ReactElement } from "react";
import {useDispatch ,useSelector} from 'react-redux';
import { signIn , logout } from "../Store/authSlice";
import { AppSelector } from "../Store/store";
function ButtonLogin():ReactElement{
    const {loggin} = useSelector((state:AppSelector)=>state.auth);
    const dispatch = useDispatch();
    return(
        (!loggin)?<button type="button" className="btn btn-primary w-100" onClick={()=>{
            dispatch(signIn());
        }}>login</button>:<button type="button" className="btn btn-danger w-100" onClick={()=>{
            dispatch(logout());
        }}>logout</button>
    );
}
export default ButtonLogin;