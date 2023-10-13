import { useState } from "react";
import { ContextProvider } from "../context/CitiesContext";

export function UseLocation(){
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");

   const context = ContextProvider();
   const dispatch = context.dispatch;

   async function getPosition(){
      if(!navigator.geolocation){
         return setError("Invalid Location");
      }
   
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition((pos) => {
         dispatch({ type: "setLocation", payload: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
         }});
         setIsLoading(false);
      }, 
      (error) => {
         setError(error);
         setIsLoading(false);
      });
   }
   return { isLoading, error, getPosition };
}

