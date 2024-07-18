import React from "react";
import { Link } from "react-router-dom";
import "./dashboardBody.css";
import scheduleIcon from "../../images/scheduleIcon.png"; // Replace with your icon/image
import nurseIcon from "../../images/nurseIcon.png"; // Replace with your icon/image
import activityIcon from "../../images/activityIcon.png"; // Replace with your icon/image

function DashboardBody({ heartRate }) {
  return (
    <div className="dashboard-body px-2 mt-4 flex flex-col items-center">
      <Link to="/schedule" className="schedule schedule-container flex flex-col items-center">
        <img src={scheduleIcon} alt="Schedule Icon" className="icon" />
        <span>Check Your Schedule</span>
        <div className="sub-section">
            <h4 className="container-title">Recent Schedule : </h4>
            <div className="recent-schedule">
                <span>Meeting with Team - 10:00 AM</span>
            </div>
            <div className="recent-schedule">
                <span>Doctor's Appointment - 3:00 PM</span>
            </div>
        </div>
    </Link>
      <Link to="/virtual-nurse" className="nurse nurse-container flex flex-col items-center">
        <img src={nurseIcon} alt="Nurse Icon" className="icon" />
        <span>Virtual Nurse</span>
      </Link>
      <Link to="/activity" className="activity activity-container flex flex-col items-center">
        <img src={activityIcon} alt="Activity Icon" className="icon" />
        <span>Activity</span>
      </Link>
    </div>
  );
}

export default DashboardBody;
