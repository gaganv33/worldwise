import styles from "./AppLayout.module.css";
import Map from "./Map";
import SideBar from "../components/SideBar";
import logo from "../assets/icon.png";
import { AuthConsumer } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AppLayout(){
    const context = AuthConsumer();
    const navigate = useNavigate();
    const { logout, user, isAuthenticated } = context;

    function handleLogoutButton(e){
        e.preventDefault();
        logout();
    }

    useEffect(function() {
        if(!isAuthenticated){
            navigate("/login");
        }
    }, [navigate, isAuthenticated]);

    return (
        <>
            {isAuthenticated && 
            <>
                <div className={styles.display}>
                    <div>
                        <img src={logo} alt={"WorldWise"} className={styles.image} />
                    </div>
                    <div className={styles.header}>
                        WorldWise
                    </div>
                    <div className={styles.logout}>
                        {user.name}
                        <button className={styles.logoutButton} onClick={(e) => handleLogoutButton(e)}>Logout</button>
                    </div>
                </div>
                <div className={styles.appLayout}>
                    <SideBar />
                    <Map />
                </div>
            </>
            }
        </>
    )
}