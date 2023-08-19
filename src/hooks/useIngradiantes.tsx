import { useEffect, useMemo } from "react";
import { AppDispatch, AppSelector } from "../Store/store";
import {useSelector,useDispatch} from 'react-redux';
import { ingradiantetype} from "../Types/types";
import {Link} from 'react-router-dom';
import { getIngradiante } from "../Store/ingeradiantSlice";
function useIngradiantes(){
    const {ingradiantes,loading} = useSelector((state:AppSelector)=>state.ingradiantes);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(getIngradiante({url:'https://www.themealdb.com/api/json/v1/1/list.php?i=list'}));
    },[dispatch]);
    const ingradianteMap = useMemo(()=>{
        return (ingradiantes)?(ingradiantes.map((el:ingradiantetype,index:number)=>{
            return(
                <Link to={`showingradiante/${el.strIngredient}`} style={{width:"18rem"}} className={`card p-2 mx-auto carousel-item link-underlinless ${!index&&"active"} mb-0`} key={el?.idIngredient}>
                    <h5 className="card-title text-center">{el?.strIngredient}</h5>
                    <p className="card-text  min-height-120">{el.strDescription}</p>
                </Link>
            )})):null
    },[ingradiantes]);
    return {ingradianteMap,loading};
}
export default useIngradiantes;