import Logo from "./Logo"
import styles from "./SideBar.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

export default function SideBar(){
    return (
        <div className={styles.container}>
            <Logo />
            <AppNav />
            <Outlet />
        </div>
    )
}