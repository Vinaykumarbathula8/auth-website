import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>
      <div className="settings-section">
        <h3 className="section-title">Notifications</h3>
        <div className="toggle-container">
          <span className="toggle-label">Enable Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={toggleNotifications}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Status Section */}
      {/* <div className="status-section">
        <h3 className="section-title">Status</h3>
        <div className="status-item">
          <span className="status-label">Account Status:</span>
          <span className="status-value active">Active</span>
        </div>
        <div className="status-item">
          <span className="status-label">Subscription:</span>
          <span className="status-value expired">Expired</span>
        </div>
        <div className="status-item">
          <span className="status-label">Last Login:</span>
          <span className="status-value">2 hours ago</span>
        </div>
      </div> */}
    </div>
  );
}

export default Settings;
