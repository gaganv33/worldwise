import { useNavigate, useParams } from "react-router-dom";
import styles from "./CityForm.module.css";
import { ContextProvider } from "../context/CitiesContext";

export default function CityForm(){
   const navigator = useNavigate();
   const x = useParams();
   let id = x.id;

   const contextValue = ContextProvider();
   const city = contextValue.state.data;

   id = Number(id);
   let singleCity = city.filter((single) => {
      if(single.id === id){
         console.log("found");
         return single;
      }
   })
   singleCity = singleCity[0];

   const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(new Date(date));
    const date = formatDate(singleCity.date);

   return (
      <div className={styles.main}>
         <label className={styles.label}>cityname</label>
         <br />
         <div className={styles.div}>
            <span className={styles.spanFlag}>{singleCity.emoji}</span>
            {singleCity.cityName}
         </div>
         <br />
         <label className={styles.label}>you went to {singleCity.cityName} on</label>
         <div className={styles.div}>{date}</div>
         <br />
         <label className={styles.label}>your notes</label>
         <div className={styles.div}>{singleCity.notes ? singleCity.notes : "Nice Trip"}</div>
         <br />
         <label className={styles.label}>Learn More</label><br />
         <a
            href={`https://en.wikipedia.org/wiki/${singleCity.cityName}`}
            target="_blank"
            rel="noreferrer"
            className={`${styles.moreInformation} ${styles.div}`}
         >More about {singleCity.cityName}&rarr;</a>
         <br />
         <button className={styles.backButton} onClick={() => navigator("/app/city")}>&larr; Back</button>
      </div>
   );
}
