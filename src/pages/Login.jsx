import { useState } from "react";
import NavBar from "../components/NavBar";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("jack@example.com");
    const [password, setPassword] = useState("12345678");

    return (
        <div className={styles.main}>
            <NavBar />
            <div className={styles.loginContainer}>
                <div className={styles.form}>
                    <div>
                        <label>Email address</label><br />
                        <input type="text" className={styles.inputForm} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label>Password</label><br />
                        <input type="password" className={styles.inputForm} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div><br />
                    <div>
                        <button className={styles.loginButton} onClick={() => navigate("/app")}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}