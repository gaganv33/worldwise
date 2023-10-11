import { Link } from "react-router-dom";
import NavBar from "../components/NavBar"
import styles from "./HomePage.module.css";

export default function HomePage(){
    return (
        <div className={styles.homePage}>
            <NavBar />
            <div className={styles.data}>
                <div>
                    <h1>You travel the world.</h1>
                    <h1>WorldWise keeps track of your adventures.</h1>
                </div>
                <div>
                    <p>A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show ur friends how you have wandered the world.</p>
                </div>
                <div>
                    <button className={styles.loginButton}><Link to="/login" className={styles.link}>Start tracking now</Link></button>
                </div>
            </div>
        </div>
    )
}