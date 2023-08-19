import { ReactElement } from "react";
import {useParams} from 'react-router-dom';
import ProtectedRoutes from "../utils/ProtectedRoutes";
import ShowPage from "../components/ShowPage";

function ShowIngradiante():ReactElement{
    const {ingradiante} = useParams();
    return(
        <ShowPage query={`i`} value={ingradiante} />
    );
}
export default ProtectedRoutes(ShowIngradiante);