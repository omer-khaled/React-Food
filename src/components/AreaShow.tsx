import { ReactElement} from "react";
import useArea from "../hooks/useArea";
import NavError from "../utils/NavError";
function AreaShow():ReactElement{
    const {areasMap,loading} = useArea();
    return(
        <NavError loading={loading}>
             <div className="container my-3">
                <div id="carouselExampleControls1" className="carousel slide text-dark" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {areasMap}
                    </div>
                    <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                        <span className="text-dark">Previous</span>
                    </button>
                    <button className="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                        <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                        <span className="text-dark">Next</span>
                    </button>
                </div>
            </div>
        </NavError>
    );
}
export default AreaShow;