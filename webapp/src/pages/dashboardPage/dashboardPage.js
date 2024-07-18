import React from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import BottomNav from "../../components/bottomNav/bottomNav";
import DashboardBody from "../../components/dashboardBody/dashboardBody";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import GeneralizedSearch from "../../components/generalizedSearch/generalizedSearch";
import API from "../../api";

function DashboardPage(params) {
    const [ws, setWs] = useState(null);
    const [heartRate, setHeartRate] = useState(0);
    
    useEffect(() => {
        const websocket = new WebSocket(API.socket_wearos);
    
        websocket.onopen = () => {
            console.log('WebSocket is connected');
            websocket.send('Hello');
        };
    
        websocket.onmessage = (evt) => {
            const message = (evt.data);
            const data = JSON.parse(message);
            if(data.heartRate > 140){
                toast.error('Heart rate is too high!');
            }
            setHeartRate(data.heartRate);
        };
    
        websocket.onclose = () => {
            console.log('WebSocket is closed');
        };
    
        setWs(websocket);
    
        return () => {
            websocket.close();
        };
    }, []);
    return (
        <div className="bg-[#F7F7F7]">
            <DashboardHeader/>
            <GeneralizedSearch/>
            <DashboardBody heartRate={heartRate}/>
            <BottomNav/>
        </div>
    );
}

export default DashboardPage;