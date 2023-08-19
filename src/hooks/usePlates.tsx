import { useSelector } from 'react-redux'
import {useMemo} from 'react';
import Card from '../components/Card';
import { AppSelector } from '../Store/store';

function usePlates(){
    const {plates,caseHandle} = useSelector((state:AppSelector)=>state.places);
    const placesCards = useMemo(()=>{
        return (plates)?plates.map(el=>{
           return(<Card meal={el} key={el.idMeal} />);
        }):<div>Empty</div>;
    },[plates]);
    return {caseHandle,placesCards};
}   
export default usePlates;