import { ReactElement } from "react";
import { mealTypePop } from "../Types/types";
type CardShowProps = {
    mealcomponents:string[]|null,
    meal:mealTypePop,
}
function CardShow({meal,mealcomponents}:CardShowProps):ReactElement{
    return(
        <div className="card m-2 mt-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="position-relative">
                        <img src={meal?.strMealThumb} className="img-fluid rounded-start" alt="..."/>
                        <a href={meal?.strYoutube} className="text-danger custom-fs position-absolute top-50 start-50"><i className="text-danger bi bi-youtube"></i></a>
                    </div>
                </div>
                <div className="col-md-8">
                <div className="card-body border-0">
                    <h5 className="card-title">{meal?.strMeal}</h5>
                    <span className="fs-5 text-primary">Instructions: </span>
                    <p className="card-text ps-1 mb-2">{meal?.strInstructions}</p>
                    <p className="card-text mb-2">
                        <span className="fs-5 text-primary">Category: </span> <small className="text-muted me-1">{meal?.strCategory}</small>
                    </p>
                    <p className="card-text mb-2">
                        <span className="fs-5 text-primary">Area: </span><small className="text-muted">{meal?.strArea}</small>
                    </p>
                    <span className="fs-5 text-primary">Recipes: </span>
                    <div className="d-flex justify-content-start flex-wrap ps-2">
                        {
                            (mealcomponents)&&mealcomponents.map((el,index)=>{
                                return(<span key={index} className="rounded-pill bg-dark text-white p-2 m-1">{(meal)&&meal[el]}</span>);
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default CardShow;