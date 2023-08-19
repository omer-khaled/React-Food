import { ReactElement, ReactNode } from "react";
import ErrorServer from "../components/ErrorServer";
interface WrapperProps {
    children: ReactNode | ReactNode[];
    loading:boolean|null
}
function NavError({ children , loading}:WrapperProps):ReactElement{
    return(<>
        {(loading!==null)?(loading?children:<ErrorServer/>):<div className="text-center w-100">on loading</div>}
    </>);
}
export default NavError;