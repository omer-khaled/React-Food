import { ReactElement } from "react";
import {useParams} from 'react-router-dom';
import ProtectedRoutes from "../utils/ProtectedRoutes";
import ShowPage from "../components/ShowPage";

function ShowArea():ReactElement{
    const {area} = useParams();
    return(
        <ShowPage query={`a`} value={area} />
    );
}
export default ProtectedRoutes(ShowArea);