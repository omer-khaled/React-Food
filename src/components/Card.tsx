import {ReactElement} from 'react';
import {CardProps} from '../Types/types';
import {Link} from 'react-router-dom';
function Card({meal:{strMeal,strMealThumb,idMeal}}:CardProps):ReactElement{
    return(
        <div className='col mb-3 ' key={idMeal}>   
            <div className="card mx-auto " style={{width:"18rem"}}>
                <img src={strMealThumb} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-nowrap text-overflow w-100">{strMeal}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/React-Food/showmeal/${idMeal}`} className="btn btn-primary">More Details</Link>
                </div>
            </div>
        </div>
    );
}
export default Card;