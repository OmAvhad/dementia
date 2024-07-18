import React, { useState } from 'react';
import './Level.css';

function Level() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStage, setSelectedStage] = useState('');

  const handleNextClick = () => {
    alert(`Selected year: ${selectedYear}, Selected stage: ${selectedStage}`);
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= currentYear - 10; i--) {
      years.push(i);
    }
    return years;
  };

  return (
    <div className="container">
      <h1 className="title">Thank you for sharing that information. To provide the best possible support, please answer a few more questions about your diagnosis.</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="dementiaType">Type of Dementia</label>
          <select id="dementiaType" className="form-control">
            <option>Select Option</option>
            <option>Alzheimer's</option>
            <option>Vascular Dementia</option>
            <option>Lewy Body Dementia</option>
            <option>Frontotemporal Dementia</option>
          </select>
        </div>
        <div className="form-group">
          <label>Stage</label>
          <div className="stage-buttons">
            {['Early', 'Middle', 'Late'].map(stage => (
              <button
                type="button"
                key={stage}
                className={`stage-button ${selectedStage === stage ? 'active' : ''}`}
                onClick={() => setSelectedStage(stage)}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="diagnosisYear">Year of diagnosis</label>
          <select
            id="diagnosisYear"
            className="form-control"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {generateYearOptions().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="next-button" onClick={handleNextClick}>Next</button>
      </form>
      <div className="bottom-bar-level"></div>
    </div>
  );
}

export default Level;
