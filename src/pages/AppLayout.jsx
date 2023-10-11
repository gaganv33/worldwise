import styles from "./AppLayout.module.css";
import Map from "./Map";
import SideBar from "../components/SideBar";

export default function AppLayout(){
    return (
        <div className={styles.appLayout}>
            <SideBar />
            <Map />
        </div>
    )
}