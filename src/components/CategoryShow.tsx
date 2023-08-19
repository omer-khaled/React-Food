import { ReactElement} from "react";
import useCategories from "../hooks/useCategories";
import NavError from "../utils/NavError";
function CategoryShow():ReactElement{
    const {categoriesMap,loading} = useCategories();
    return(
        <NavError loading={loading}>
            <div className="container my-3">
                <div id="carouselExampleControls" className="carousel slide text-dark" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {categoriesMap}
                    </div>
                    <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                        <span className="text-dark">Previous</span>
                    </button>
                    <button className="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                        <span className="text-dark">Next</span>
                    </button>
                </div>
            </div>
        </NavError>
    );
}
export default CategoryShow;