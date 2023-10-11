import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo(){
    return (
        <div className={styles.container}>
            <Link to="/app"><img src={logo} alt="Worldwise"  className={styles.image} /></Link>
        </div>
    );
}
