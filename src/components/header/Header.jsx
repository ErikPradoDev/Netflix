import './HeaderModule.sass'
import { NavLink } from "react-router";


export default function ContactPage(){
    return(
        <>
            <header>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/ContactPage"> ContactPage </NavLink>
            </header>
            
            
        </>
    )
}