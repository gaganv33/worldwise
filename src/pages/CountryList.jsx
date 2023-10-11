import styles from "./CountryList.module.css";
import Country from "../components/Country";
import { ContextProvider } from "../context/CitiesContext";
import Message from "../components/Message";

export default function CountryList(){

    const contextValue = ContextProvider();
    const city = contextValue?.state?.data;
    const country = [];

    city.map((singleData) => {
        let found = false;
        country.map((singleCountry) => {
            if(singleCountry.country === singleData.country){
                found = true;
            }
        })
        if(!found){
            country.push({country: singleData.country, emoji: singleData.emoji});
        }
    });

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                {
                    country.length !== 0 && country.map((singleData) => (<Country data={singleData} key={singleData.country} />))
                }
            </div>
            {
                country.length === 0 && <Message />
            }
        </div>
    )
}