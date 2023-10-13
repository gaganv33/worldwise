import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { AuthConsumer } from "../context/AuthContext";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("jack@example.com");
    const [password, setPassword] = useState("12345678");

    const context = AuthConsumer();
    const { login, isAuthenticated, error } = context;

    function handleLoginButton(e){
        e.preventDefault();
        if(email && password){
            login(email, password);
        }
    }

    useEffect(function() {
        if(isAuthenticated){
            navigate("/app", {replace: true});
        }
        else{
            error !== "" && alert(error);
        }
        
    }, [isAuthenticated, navigate, error]);

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
                        <button className={styles.loginButton} onClick={(e) => handleLoginButton(e)}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
