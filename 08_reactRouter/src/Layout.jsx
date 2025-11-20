import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

// import outlet
import { Outlet } from "react-router-dom";

// Outlet => It works as a varibale to items that needs to be changed.


function Layout() {

    return(
        <>

        <Header />

        <Outlet/>

        <Footer />

        </>

    )
}

export default Layout;