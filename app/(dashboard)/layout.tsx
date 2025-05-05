import React from "react";
import { Toaster } from 'sonner-native';
import Footer from "../../components/footer";
import Header from "@/components/header";

type props = {
    children: React.ReactNode
}
const DashboardLayout = ({children}: props) =>{
    return(
        <div className=" relative w-full h-full">
            <Header/>
            <div className="min-h-screen">
            {children}
            <Toaster position="top-center"/>
            </div>
            <Footer/>
        </div>
    )
}
export default DashboardLayout;