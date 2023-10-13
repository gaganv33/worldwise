import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import styles from "./App.module.css";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./pages/CityList";
import CountryList from "./pages/CountryList";
import CityForm from "./pages/CityForm";
import Form from "./pages/Form";
import { CitiesContext } from "./context/CitiesContext.jsx";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";


export default function App(){

  return (
      <div className={styles.app}>
        <AuthProvider>
          <CitiesContext>
            <BrowserRouter>
              <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route path="app" element={<ProtectedRoute>
                                              <AppLayout />
                                            </ProtectedRoute>
                                          }>
                  <Route index element={<Navigate replace to="city" />}></Route>
                  <Route path="city" element={<CityList />} />
                  <Route path="city/:id" element={<CityForm />} />
                  <Route path="country" element={<CountryList />} />
                  <Route path="form" element={<Form />}></Route>
                </Route>
                <Route path="*" element={<p>Page Not Found</p>} />
              </Routes>
            </BrowserRouter>
          </CitiesContext>
        </AuthProvider>
      </div>
  );
}

