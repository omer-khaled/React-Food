import { ReactElement } from "react";

function ErrorServer():ReactElement{
    return(
        <div className="my-3 d-flex justifiy-content-center align-items-center flex-column">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>Server Error 404</p>
        </div>
    );
}   
export default ErrorServer;