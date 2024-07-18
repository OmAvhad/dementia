import React from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import BottomNav from "../../components/bottomNav/bottomNav";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Gallery from "../gallery/gallery";


const Activities = () => {
    
  
    return (
        <div className="bg-[#F7F7F7]">
            <DashboardHeader/>
            <Gallery/>
            <BottomNav/>
        </div>      
    );
  };


export default Activities;