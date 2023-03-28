import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo.png"

const Layout = () => {
    return (
        <>
            <div className="nav-box">
                <nav class="container-fluid navbar navbar-expand-sm bg-white justify-content-between px-5 shadow-sm ">
                    <ul class="navbar-nav">
                        <img src={logo} width="50" height="50" class="position-relative" alt="" />
                        <li class="nav-item">
                            <Link class="nav-link fs-4 ms-3" to="/home">Explore</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ">
                        
                        <li class="nav-item me-3">
                            <Link class="nav-link" to="/home">Home</Link>
                        </li>

                        <li class="nav-item me-3">
                            <Link class="nav-link" to="/map">Map</Link>
                        </li>
                        <li class="nav-item me-3">
                            <Link class="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About Us</Link>
                        </li>

                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;
