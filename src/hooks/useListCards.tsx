import { useEffect } from "react";
import { AppDispatch, AppSelector } from "../Store/store";
import {useSelector,useDispatch} from 'react-redux';
import { mealTypePop } from "../Types/types";
import { getSearchMeals } from "../Store/searchSlice";
import Card from "../components/Card";
function useListCards(searchValue:string|null){
    const {meals,loading} = useSelector((state:AppSelector)=>state.search);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        // debounce Technice
        let handler:number|null = null;
        if(searchValue){
            handler = window.setTimeout(()=>{
                dispatch(getSearchMeals({url:`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`}));
            },1000);
        }
        return()=>{
            if(handler){
                window.clearTimeout(handler);
            }
        }
    },[dispatch,searchValue]);
    const searchMap = (meals)?(meals.map((el:mealTypePop,index:number)=>{
                return(
                    <Card meal={el} key={el.idMeal} />
                )
            })
        ):null;
        return {searchMap,loading};
}
export default useListCards;