import React from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";

function SchedulePage() {
    return (
        <>
            <DashboardHeader/>
            <div className="px-4">
            <div className="mt-2 mb-1">
            <div className="upcoming-event p-2 w-full flex flex-row justify-start items-center">
                <div className="event-time flex justify-start items-center px-1">
                    12:00 PM
                </div>
                <div className="event-body ml-3 flex justify-start items-center px-1">
                    Daily Checkups
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default SchedulePage;