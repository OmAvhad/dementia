import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import { LineChart } from '@mui/x-charts';
import axios from 'axios';
import { toast } from "react-toastify";

function ReportPage() {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getHeartRate();
        console.log(data);
    }, []);

    const [ws, setWs] = useState(null);
    
    useEffect(() => {
        const websocket = new WebSocket('wss://wear-os.onrender.com');
    
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
        const response = await axios.get('http://192.168.1.194:8080/heartRate');
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
            <div className="w-full flex flex-col justify-center items-center">
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
                />
            </div>
        </>
    )
}

export default ReportPage;