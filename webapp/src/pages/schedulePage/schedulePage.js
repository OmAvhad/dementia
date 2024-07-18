import React from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import BottomNav from "../../components/bottomNav/bottomNav";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';

function SchedulePage() {
    return (
        <>
            <DashboardHeader/>
            <div className="px-2 overflow-y-scroll">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker defaultValue={dayjs('2024-07-19')} />
            </LocalizationProvider>
            <div className="px-2">
            <div className="mt-2 mb-1">
            <div className="upcoming-event p-2 w-full flex flex-row justify-start items-center">
                <div className="event-time flex justify-start items-center px-1">
                    12:00 PM
                </div>
                <div className="event-body ml-3 flex justify-start items-center px-1">
                    Lunch
                </div>
            </div>
            </div>

            <div className="mt-2 mb-1">
            <div className="upcoming-event p-2 w-full flex flex-row justify-start items-center">
                <div className="event-time flex justify-start items-center px-1">
                    2:00 PM
                </div>
                <div className="event-body ml-3 flex justify-start items-center px-1">
                    Doctor Appointment
                </div>
            </div>
            </div>
            
            </div>
            </div>
            <BottomNav/>
        </>
    )
}

export default SchedulePage;