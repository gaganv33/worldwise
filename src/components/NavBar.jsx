import styles from "./NavBar.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className={styles.navbar}>
            <div>
                <Link to="/"><img src={logo} alt={"World wise logo"} className={styles.image} /></Link>
            </div>
            <div className={styles.links}>
                <div>
                    <Link to="/product" className={styles.link}>Product</Link>
                </div>
                <div>
                    <Link to="/pricing" className={styles.link}>Pricing</Link>
                </div>
                <div className={styles.loginButton}>
                    <Link to="/login" className={styles.button}>Login</Link>
                </div>
            </div>
        </div>
    )
}