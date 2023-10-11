import styles from "./CityList.module.css";
import City from "../components/City";
import Message from "../components/Message";
import { ContextProvider } from "../context/CitiesContext";

export default function CityList(){
    const contextValue = ContextProvider();
    const city = contextValue?.state?.data;

    return (
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
    );
}
