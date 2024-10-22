import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

type props = {
    children: React.ReactNode
}
const DashboardLayout = ({children}: props) =>{
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default DashboardLayout;