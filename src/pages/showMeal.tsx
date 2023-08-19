import { ReactElement} from "react";
import {useParams} from 'react-router-dom';
import CardShow from "../components/CardShow";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import useMeal from "../hooks/useMeal";
function ShowMeal():ReactElement{
    const {id} = useParams();
    const {meal,mealcomponents}  = useMeal(id);
    return(
        <>
            {
                (meal)?<CardShow mealcomponents={mealcomponents} meal={meal} />:<div>loading...</div>
            }
        </>
    )
}
export default ProtectedRoutes(ShowMeal);