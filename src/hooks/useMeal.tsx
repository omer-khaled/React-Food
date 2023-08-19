import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppSelector } from "../Store/store";
import { getMeal } from "../Store/MealSlice";

function useMeal(id:string|undefined){
    const {meal} = useSelector((state:AppSelector)=>state.meal);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(getMeal({id}));
    },[dispatch,id]);
    const mealcomponents =  meal?(Object.keys(meal).filter((el)=>{
        return (/^strIngredient\d$/.test(el)&&meal[el]!=='');
    })):null;
    return {meal,mealcomponents};
}
export default useMeal;