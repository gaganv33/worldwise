import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const intialState = {
   user : null,
   isAuthenticated : false,
   error: ""
};

const FAKE_USER = {
   name: "Jack",
   email: "jack@example.com",
   password: "12345678",
};

function reducer(state, action){
   switch(action.type){
      case "login":
         return {...state, user: action.payload, isAuthenticated: true};
      case "logout":
         return {...state, user: null, isAuthenticated: false};
      case "setError":
         return {...state, error: action.payload};
      default:
         throw new Error("Invalid action type.");
   }
}

function AuthProvider(props){
   const information = {...props};
   const children = information.children;
   const [{ user, isAuthenticated, error }, dispatch] = useReducer(reducer, intialState);

   function login(email, password){
      if(email === FAKE_USER.email && password === FAKE_USER.password){
         dispatch({ type: "login", payload: FAKE_USER });
      }
      else{
         dispatch({ type: "setError", payload: "Invalid email or password." });
      }
   }

   function logout(){
      dispatch({ type: "logout" });
   }

   return (
      <AuthContext.Provider value={{user, isAuthenticated, login, logout, error}}>
         {children}
      </AuthContext.Provider>
   );
}

function AuthConsumer(){
   const context = useContext(AuthContext);
   if(!context){
      throw new Error("This context cannot be accessed.");
   }
   return context;
}

export { AuthProvider, AuthConsumer };
