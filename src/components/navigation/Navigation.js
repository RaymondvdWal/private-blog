import {NavLink} from "react-router-dom";
import './Navigation.css';


function Navigation({succes, setSucces}) {
    return (
        <nav>
            <div className="nav-container">

                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"}
                            to={"/"}>Home
                        </NavLink>
                    </li>

                    <li> { succes ?
                        <NavLink
                            className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"}
                            to={"/logout"}>Logout
                        </NavLink>:
                        <NavLink
                            className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"}
                            to={"/login"}>Login
                        </NavLink>
                    }
                    </li>
                    <li> { succes ?
                        <NavLink
                            className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"}
                            to={"/blogposts"}>Blog overzicht
                        </NavLink> :
                        <NavLink
                            className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"}
                            to={"/"}>
                        </NavLink>
                        }
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navigation;