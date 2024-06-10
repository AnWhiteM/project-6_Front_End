import { RegistrationForm } from "../RegistrationForm/RegistrationForm"
import { NavLink } from "react-router-dom"
import css from "./Register.module.css"

export default function Register() {
    return(
        <div className={css.box}>
            <div className={css.nav}>
                <ul className={css.navList}>
                    <li><NavLink to = "/auth/register" className={css.active}> Registration </NavLink></li>
                    <li><NavLink to = "/auth/login"> Log in </NavLink></li>
                </ul>
            </div>
            <RegistrationForm />
        </div>

    )
}