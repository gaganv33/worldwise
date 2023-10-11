import { createContext, useContext, useReducer } from "react";
import data from "../cities.json"

const Data = data.cities;
console.log(Data);

let intialState = {
   data: data.cities ? data.cities : [],
   currentCity: null,
}

function reducer(state, action){
   switch(action.type){
      case "updateState":
         return action.payload;
      case "setSelectedCity":
         return {...state, currentCity: action.payload};
      case "addCity":
         return {...state, data: [...state.data, action.payload]};
      case "deleteCity":
         return {...state, data: state.data.filter((single)=>single.id !== action.payload)};
   }
}
const CitiesProvider = createContext();

function CitiesContext(props){
   const [state, dispatch] = useReducer(reducer, intialState);
   const information = {...props};
   const children = information.children;

   // const bool = useRef(false);

   // useEffect(function() {
   //    dispatch({ type: "updateState", payload: JSON.parse(localStorage.getItem("state")) });
   //    bool.current = true;
   // }, [])
   
   // useEffect(function() {
   //    if(!bool.current){
   //       localStorage.setItem("state", JSON.stringify(state));
   //    }
   //    bool.current = false;
   // }, [state]);

   return (
      <CitiesProvider.Provider
         value={{state, dispatch}}
      >
         {children}
      </CitiesProvider.Provider>
   );
}

function ContextProvider(){
   const context = useContext(CitiesProvider);
   return context;
}

export { CitiesContext, ContextProvider };
