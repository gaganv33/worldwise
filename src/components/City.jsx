import { Link } from "react-router-dom";
import styles from "./City.module.css";
import { ContextProvider } from "../context/CitiesContext";

export default function City(props){
    const data = {...props};
    const singleCity = data.data;
    const contextValue = ContextProvider();
    const selectedCity = contextValue.state.currentCity;
    const dispatch = contextValue.dispatch;

    const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(new Date(date));
    const date = formatDate(singleCity.date);

    function handleOnClick(id){
        dispatch({ type: "setSelectedCity", payload: id });
    }

    function handleDeleteButton(id){
        dispatch({ type: "deleteCity", payload: id});   
    }

    return (
        <div className={`${styles.main} ${selectedCity === singleCity.id ? styles.selected : ""}`}>
            <div className={styles.single}>
                <Link to={`${singleCity.id}`} className={styles.container} onClick={() => handleOnClick(singleCity?.id)}>
                    <div className={styles.column}>
                        <span>{singleCity?.emoji}</span>
                        <span>{singleCity?.cityName}</span>
                    </div>
                        <span>({date})</span>
                </Link>
                <button className={styles.closeButton} onClick={() => handleDeleteButton(singleCity?.id)}>&times;</button>
            </div>
        </div>
    );
}
