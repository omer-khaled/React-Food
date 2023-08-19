import { ReactElement } from "react";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import List from "../components/Lists";
import CategoryShow from "../components/CategoryShow";
import AreaShow from "../components/AreaShow";
import IngradianteShow from "../components/IngradianteShow";

function Home():ReactElement{
    return(
        <div className="d-flex flex-column">
            <div className="container">
                <p className="mb-0 text-primary fs-5 ">Categories</p>
            </div>
            <CategoryShow />
            <div className="container">
                <p className="mb-0 text-primary fs-5 ">Areas</p>
            </div>
            <AreaShow />
            <div className="container">
                <hr />
            </div>
            <div className="container">
                <p className="mb-0 text-primary fs-5 ">Ingradiante</p>
            </div>
            <IngradianteShow />
            <div className="container">
                <hr />
            </div>
            <div className="container">
                <p className="mb-0 text-primary fs-5">Meals</p>
            </div>
            <List url="https://www.themealdb.com/api/json/v1/1/filter.php" query="c=Breakfast"/>
        </div>
    );
}
export default ProtectedRoutes(Home);