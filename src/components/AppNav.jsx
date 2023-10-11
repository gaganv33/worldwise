import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

export default function AppNav(){
    return (
        <div className={styles.appNav}>
            <NavLink to='city' className={styles.link}>City</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink to="country" className={styles.link}>Country</NavLink>
        </div>
    );
}
