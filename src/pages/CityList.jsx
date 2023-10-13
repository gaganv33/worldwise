import styles from "./CityList.module.css";
import City from "../components/City";
import Message from "../components/Message";
import { ContextProvider } from "../context/CitiesContext";
import { UseLocation } from "../hooks/UseLocation";

export default function CityList(){
    const contextValue = ContextProvider();
    const city = contextValue?.state?.data;
    const { isLoading, getPosition } = UseLocation();
    

    function handleOnClick(e){
        e.preventDefault();
        getPosition();
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.data}>
                    {
                        city.length !== 0 && city.map((singleData) => <City key={singleData.id} data={singleData} />)

                    }
                    {
                        city.length === 0 && <Message />
                    }
                </div>
            </div>
            <div>
                <button className={styles.locationButton} onClick={(e) => handleOnClick(e)}>{
                    isLoading ? "Loading" : "Use My Location"   
                }</button>
            </div>
        </div>
    );
}
