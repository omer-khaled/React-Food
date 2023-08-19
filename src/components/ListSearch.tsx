import { ReactElement } from "react";
import useListCards from "../hooks/useListCards";
import NavError from "../utils/NavError";

function ListSearch({value}:{value:string|null}):ReactElement{
    const {searchMap,loading} = useListCards(value);
    return(
        <NavError loading={loading}>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
                    {searchMap}
                </div>
            </div>
        </NavError>
    );
}
export default ListSearch;