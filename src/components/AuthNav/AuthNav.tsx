import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"

export const AuthNav = () => {
    return (
        <div className={css.authnav}>
            <NavLink className={css.nav_link} to="/register">Register</NavLink>
            <NavLink className={css.nav_link} to="/login">Log In</NavLink>   
        </div>
        
    )
}