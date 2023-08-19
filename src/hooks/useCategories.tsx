import { useEffect } from "react";
import { AppDispatch, AppSelector } from "../Store/store";
import { getCategories} from "../Store/categoriesSlice";
import { categorytype} from "../Types/types";
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
function useCategories(){
    const {categories,loading} = useSelector((state:AppSelector)=>state.categories);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(getCategories({url:'https://www.themealdb.com/api/json/v1/1/list.php?c=list'}));
    },[dispatch]);
    const categoriesMap = (categories)?(categories.map((el:categorytype,index:number)=>{
        return(
            <Link to={`showcategories/${el.strCategory}`} className={`carousel-item link-underlinless ${!index&&"active"} mb-0`} key={index}>
                <p key={index} className="text-center my-0">{el?.strCategory}</p>
            </Link>
        )})):null;
    return {categoriesMap,loading};
}
export default useCategories;