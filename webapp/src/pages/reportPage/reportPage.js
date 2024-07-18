import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import { LineChart, BarChart } from '@mui/x-charts';
import axios from 'axios';
import BottomNav from "../../components/bottomNav/bottomNav";
import { toast } from "react-toastify";
import API from "../../api";
import CircularProgress from "@mui/material/CircularProgress"

function ReportPage() {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getHeartRate();
        console.log(data);
    }, []);

    const [ws, setWs] = useState(null);
    
    useEffect(() => {
        const websocket = new WebSocket(API.socket_wearos);
    
        websocket.onopen = () => {
            console.log('WebSocket is connected');
            websocket.send('Hello');
        };
    
        websocket.onmessage = (evt) => {
            const message = (evt.data);
            const data = JSON.parse(message);
            if(data.heartRate > 100){
                toast.error('Heart rate is too high!');
            }
            // pop the first element and append the new value
            setData(prevData => [...prevData.slice(1), data.heartRate]);
        };
    
        websocket.onclose = () => {
            console.log('WebSocket is closed');
        };
    
        setWs(websocket);
    
        return () => {
            websocket.close();
        };
    }, []);

    const getHeartRate = async () => {
        const response = await axios.get(API.wearos+'/heartRate');
        let values = [];
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i]);
            values.push(response.data[i].value);
        }
        setData(values);
    }

    return (
        <>
            <DashboardHeader/>
            {data.length===0 ? (
                <div className="w-full flex justify-center align-center">
                    <CircularProgress/>
                </div>
            ) : (
                <div className="w-full flex flex-col justify-center items-center pb-14">
                    <h2><b>Live Heart Rate</b></h2>
                    <LineChart
                        xAxis={[{ data: [5, 10, 15, 20, 25, 30, 40, 45, 50] }]}
                        series={[
                            {
                                data: data,
                                color: 'red',
                            },
                        ]}
                        width={400}
                        height={300}
                        grid={{ vertical: true, horizontal: true }}
                    />
                    <h2><b>Walking Week Pattern</b></h2>
                    <img src="/weekly.jpg" alt="" width={400}
                        height={300}/>
                    <h2><b>Walking Monthly Pattern</b></h2>
                    <img src="/monthly.jpg" alt="" width={400}
                        height={300}/>
                </div>
            )}
            <BottomNav/>
        </>
    )
}

export default ReportPage;