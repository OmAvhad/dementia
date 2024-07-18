import React, { useState } from 'react';
import './ProfilePage.css';
import profileImage from '../../components/profile.png';
import BottomNav from '../../components/bottomNav/bottomNav';

function ProfilePage() {
    const [editable, setEditable] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Abhishek Upadhyay',
    description: 'Computer, Final Year',
    email: 'megablazikenabhishek@gmail.com',
    number: '7977626653',
    dob: '14th August, 2003',
    address: 'A-702, Saraswati Building, Vashi West, Mumbai 400067'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
    // Save the data (e.g., send to a server)
  };

  const handleCancelClick = () => {
    setEditable(false);
    // Optionally reset the form to its initial state
  };
    return (
        <div className="Profile">
      <div className="header">
        <button className="back-button">←</button>
      </div>
      <div className="profile-info">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-details">
          <h2 className="profile-name">
            {editable ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            ) : (
              profile.name
            )}
          </h2>
          <p className="profile-description">
            {editable ? (
              <input
                type="text"
                name="description"
                value={profile.description}
                onChange={handleChange}
              />
            ) : (
              profile.description
            )}
          </p>
          <button className="edit-button" onClick={handleEditClick}>
            ✎
          </button>
        </div>
      </div>
      <div className="profile-fields">
        <div className="profile-field">
          <label>Email</label>
          {editable ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.email}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Number</label>
          {editable ? (
            <input
              type="text"
              name="number"
              value={profile.number}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.number}</p>
          )}
        </div>
        <div className="profile-field">
          <label>DOB</label>
          {editable ? (
            <input
              type="text"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.dob}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Address</label>
          {editable ? (
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.address}</p>
          )}
        </div>
      </div>
      {editable && (
        <div className="action-buttons">
          <button className="save-button" onClick={handleSaveClick}>Save</button>
          <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
      <BottomNav/>
    </div>
    )
}

export default ProfilePage;