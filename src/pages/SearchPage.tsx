import { ReactElement } from "react";
import InputSearch from "../components/InputSearch";
import ProtectedRoutes from "../utils/ProtectedRoutes";

function SearchPage():ReactElement{
    return(
        <div className="container d-flex flex-column align-items-start">
            <InputSearch />
        </div>
    )
}
export default ProtectedRoutes(SearchPage);