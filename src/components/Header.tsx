import { ReactElement } from "react";
import {NavLink} from 'react-router-dom';
import ButtonLogin from "./ButtonLogin";
function Header():ReactElement{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className={({isActive}:{isActive:boolean})=>{
                        return (isActive)?"active link-underlinless fs-3":"link-underlinless fs-3";
                    }}to={"/React-Food/"}>Food Omer</NavLink>
                    <button className="btn btn-primary fs-5 d-lg-none d-block text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="navbar-toggler-icon" ></i>   
                    </button>
                    <div className="collapse  navbar-collapse align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center me-2 mb-lg-0">
                            <li className="nav-item">
                                    <NavLink className={({isActive}:{isActive:boolean})=>{
                                        return (isActive)?"active link-underlinless":"link-underlinless";
                                    }} to={'searcphage'}>Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary fs-5  text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <i className="navbar-toggler-icon" ></i>   
                                </button>
                                {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">menue</h5>
                    <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-unstyled">
                            <li className="nav-item d-block d-lg-none">
                                    <NavLink className={({isActive}:{isActive:boolean})=>{
                                        return (isActive)?"active link-underlinless":"link-underlinless";
                                    }} to={'searcphage'}>Search</NavLink>
                            </li>
                    </ul>
                    <ButtonLogin />
                </div>
            </div>
        </>
    )
}
export default Header;