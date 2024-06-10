import React from 'react';
import "./Skillcard.scss";
const Skillcard = ({title, iconUrl, isActive, onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "Active" : ""}`}
    onClick={() => onClick()}
    >
        <div className="skill-icon">
            <img src={iconUrl} alt={title}/>
        </div>
        
        <span>{title}</span>
    </div>
  );
};

export default Skillcard
