import { ReactElement, useEffect } from "react";
import {useDispatch} from 'react-redux';
import usePlates from "../hooks/usePlates";
import { getAllMeals } from "../Store/placesSlice";
import { AppDispatch } from "../Store/store";
import NavError from "../utils/NavError";
type ListProps = {
    url:string,query:string
}
function List({url,query}:ListProps):ReactElement{
    const dispatch = useDispatch<AppDispatch>();
    const {placesCards,caseHandle} = usePlates();
    useEffect(()=>{
        dispatch(getAllMeals({url,query}));
    },[dispatch,url,query]);
    return(
        <NavError loading={caseHandle}>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
                    {placesCards}
                </div>
            </div>
        </NavError>
    );
}
export default List;