import { ReactElement } from "react";
import {useParams} from 'react-router-dom';
import ProtectedRoutes from "../utils/ProtectedRoutes";
import ShowPage from "../components/ShowPage";

function ShowCategories():ReactElement{
    const {category} = useParams();
    return(
        <ShowPage query={`c`} value={category} />
    );
}
export default ProtectedRoutes(ShowCategories);