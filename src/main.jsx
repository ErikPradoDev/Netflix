import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import HomePage from './pages/homePage/HomePage.jsx'
import ContactPage from "./pages/contactPage/ContactPage.jsx";
import ExplorerPage from "./pages/explorerPage/ExplorerPage.jsx";
import './styles/main.css';


const root = document.getElementById("root");

const Dashboard = () =>{
  return(
    <div>
      <Outlet />
    </div>
  )
}


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Dashboard />} >
        <Route index element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/ExplorerPage" element={<ExplorerPage />} />
      </Route>



      
      

    </Routes>
  </BrowserRouter>
);
