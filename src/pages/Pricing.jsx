import NavBar from "../components/NavBar";
import logo from "../assets/bg.jpg";
import styles from "./Pricing.module.css";
import { Link } from "react-router-dom";

export default function Pricing(){
    return (
        <div className={styles.main}>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.product}>
                    <div className={styles.information}>   
                        <h1>About world wide</h1>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor repudiandae fugit unde? Accusamus, architecto modi quisquam ipsa nesciunt excepturi omnis atque, rerum nostrum fugit sequi esse! Eaque laboriosam facere sunt!</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.loginButton}><Link to="/login" className={styles.link}>Start tracking now</Link></button>
                        </div>
                    </div>
                    <div>
                        <img src={logo} alt={"Background"} className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    );
}
