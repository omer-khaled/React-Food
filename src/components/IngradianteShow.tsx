import { ReactElement} from "react";
import NavError from "../utils/NavError";
import useIngradiantes from "../hooks/useIngradiantes";
function IngradianteShow():ReactElement{
    const {ingradianteMap,loading} = useIngradiantes();
    return(
        <NavError loading={loading}>
             <div className="container my-3">
                <div id="carouselExampleControls2" className="carousel slide text-dark" data-bs-ride="carousel">
                    <div className="carousel-inner d-flex justifiy-content-center align-items-center">
                        {ingradianteMap}
                    </div>
                    <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                        <span className="text-dark">Previous</span>
                    </button>
                    <button className="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                        <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                        <span className="text-dark">Next</span>
                    </button>
                </div>
            </div>
        </NavError>
    );
}
export default IngradianteShow;