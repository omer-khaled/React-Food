import { useEffect, useMemo } from "react";
import { AppDispatch, AppSelector } from "../Store/store";
import {useSelector,useDispatch} from 'react-redux';
import { areatype} from "../Types/types";
import {Link} from 'react-router-dom';
import {  getAreas } from "../Store/areaSlice";
function useArea(){
    const {area,loading} = useSelector((state:AppSelector)=>state.areas);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(getAreas({url:'https://www.themealdb.com/api/json/v1/1/list.php?a=list'}));
    },[dispatch]);
    const areasMap = useMemo(()=>{
        return (area)?(area.map((el:areatype,index:number)=>{
            return(
                <Link to={`showArea/${el.strArea}`} className={`carousel-item link-underlinless ${!index&&"active"} mb-0`} key={index}>
                    <p key={index} className="text-center my-0">{el?.strArea}</p>
                </Link>
            )})):null
    },[area]);
    return {areasMap,loading};
}
export default useArea;