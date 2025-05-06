import React from 'react';
import './QuickActions.css';

function GenerateReport() {
  const handleGenerate = () => {
    alert('Report generated successfully!');
  };

  return (
    <div className="action-screen">
      <h2>Generate Report</h2>
      <p>This feature will generate a monthly usage report based on your recent activity.</p>
      <button className="button" onClick={handleGenerate}>
        Generate Now
      </button>
    </div>
  );
}

export default GenerateReport;
