import { ReactElement } from "react";
import List from "./Lists";
import { ShowPageProps } from "../Types/types";

function ShowPage({query,value}:ShowPageProps):ReactElement{
    return(
        <div className="d-flex flex-column">
            <p className="text-center fs-5 text-primary mt-2 mb-0">{value}</p>
            <List url={"https://www.themealdb.com/api/json/v1/1/filter.php"} query={`${query}=${value}`}/>
        </div>
    )
}
export default ShowPage;