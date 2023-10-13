import { useEffect } from "react";
import { AuthConsumer } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute(props){
   const context = AuthConsumer();
   const { isAuthenticated } = context;
   const navigate = useNavigate();
   const information = {...props};
   const children = information.children;

   useEffect(function() {
      if(!isAuthenticated){
         navigate("/login");
      }
   }, [isAuthenticated, navigate]);

   return (
      isAuthenticated && children
   )
}