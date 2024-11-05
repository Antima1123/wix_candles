import React from "react";
import Footer from "../../components/footer";
import Header from "@/components/header";

type props = {
    children: React.ReactNode
}
const DashboardLayout = ({children}: props) =>{
    return(
        <div className=" relative w-full h-full">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default DashboardLayout;