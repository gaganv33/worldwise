import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Form.module.css";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import { ContextProvider } from "../context/CitiesContext";

export default function Form(){
   const [searchParams] = useSearchParams();
   const lat = searchParams.get("lat");
   const lng = searchParams.get("lng");
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   const context = ContextProvider();

   const { dispatch } = context;

   const [formData, setFormData] = useState({
      cityName: "",
      country: "",
      date: "",
      emoji: "",
      id: Math.random(),
      notes: "",
      position: {lat: 0, lng: 0}
   });
   
   const navigate = useNavigate();

   useEffect(function() {
      async function fetchData(){
         try{
            setError(null);
            setIsLoading(true);
            const locationData = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
            const data = await locationData.json();
            const countryCode = data.countryCode;
            const cityName = data.city;
   
            const today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1;
            const yy = today.getFullYear();

            if(dd < 10){
               dd = '0' + dd;
            }
            if(mm < 10){
               mm = '0' + mm;
            }

            setFormData((values) => {
               return {
                  ...values,
                  cityName: cityName,
                  country: data.countryName,
                  date: `${dd}/${mm}/${yy}`,
                  emoji: countryCode,
                  position: {
                     lat: data.latitude,
                     lng: data.longitude
                  }
               };
            })
            if(countryCode === "" && cityName === ""){
               throw new Error("Not a valid country name");
            }
         }
         catch(error){
            console.log(error);
            setError(error.message);
         }
         finally{
            setIsLoading(false);
         }
      }

      if(lat && lng){
         fetchData();
      }
   }, [lat, lng]);


   return (
      <div className={styles.form}>
         {
            isLoading && (<Loading />)
         }
         {
            (error) && (<ErrorComponent error={error} />)
         }
         {
            !isLoading && (!error) && (
               <>
                  <h2>Form</h2>  
                  <div className={styles.single}>
                     <label>City Name</label>
                     <input type="text" className={styles.input} value={formData.cityName} readOnly disabled />
                  </div>

                  <div className={styles.single}>
                     <label>When did you go to?</label>
                     <input type="text" className={styles.input} value={formData.date} readOnly disabled />
                  </div>

                  <div className={styles.single}>
                     <label>When did you go to?</label>
                     <textarea type="textarea" className={styles.input} value={formData.notes} onChange={(e) => setFormData((values) => {
                        return {...values, notes: e.target.value}
                     })} />
                  </div>

                  <div className={styles.buttonContainer}>
                     <div>
                        <button className={styles.addButton} onClick={() => {
                           dispatch({ type:"addCity", payload:formData});
                           navigate("/app/city");
                        }}>ADD</button>
                     </div>
                     <div>
                        <button className={styles.backButton} onClick={() => navigate("/app/city")}>BACK</button>
                     </div>
                  </div>
               </>
            )
         }
      </div>
   );
}
