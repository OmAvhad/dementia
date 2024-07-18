import React from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import BottomNav from "../../components/bottomNav/bottomNav";
import "./Contacts.css";
import profile1 from "../../images/profile1.png";
import profile2 from "../../images/profile2.png";
import profile3 from "../../images/profile3.png";
import profile4 from "../../images/profile4.png";

const contacts = [
    {
        profile: profile1,
        name: "John Doe",
        number: "(123) 456-7890",
        relationship: "Son"
    },
    {
        profile: profile2,
        name: "Jane Smith",
        number: "(098) 765-4321",
        relationship: "Daughter"
    },
    {
        profile: profile3,
        name: "Alice Teson",
        number: "(555) 555-5555",
        relationship: "Wife"
    },
    {
        profile: profile4,
        name: "Bob Brown",
        number: "(111) 222-3333",
        relationship: "Neighbor"
    }
];

const Contacts = () => {
    return (
        <div className="bg-st min-h-screen flex flex-col justify-between">
            <DashboardHeader />
            <div className="contacts-container p-4">
                <h2 className="text-center text-2xl font-bold mb-4">Contacts</h2>
                <div className="contacts-grid">
                    {contacts.map((contact, index) => (
                        <div key={index} className="contact-card">
                                <img src={contact.profile} alt={`${contact.name}'s profile`} className="profile-pic" />
                                <a href={`tel:${contact.number}`}>
                                <div className="contact-info">
                                    <h3 className="contact-name">{contact.name}</h3>
                                    <p className="contact-number">{contact.number}</p>
                                    <p className="contact-relationship">{contact.relationship}</p>
                                </div>
                                </a>
                            </div>
                    ))}
                </div>
            </div>
            <BottomNav />
        </div>
    );
}

export default Contacts;
