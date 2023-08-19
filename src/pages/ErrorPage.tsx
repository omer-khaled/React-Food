import { ReactElement } from "react";
import {useRouteError,useNavigate } from 'react-router-dom';
function ErrorPage():ReactElement{
    const error = useRouteError();
    const navigate = useNavigate();
    return(
            <div className="my-3 d-flex justifiy-content-center align-items-center flex-column">
                <h1 className="customError">404</h1>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{(error)?((error as Response).statusText || (error as Response).status):"Server Error error"}</i>
                </p>
                <button className="btn" onClick={()=>{
                    // window.location.replace('/');
                    navigate('/',{replace:true}); 
                }}>go Back</button>
            </div>
    );
}
export default ErrorPage;