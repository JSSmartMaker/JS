import { useState } from "react";
import { SKILLS } from "../../utils/data";
import "./skill.scss";
import Skillcard from "./skillcard/Skillcard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) =>{
    setSelectedSkill(data);
  };
  return (
    <section className="skill-container">
       <h1>Technical Proficiency</h1>
      
      <div className="skill-content">
      <div className="skills">
       {SKILLS.map((item) =>(
       <Skillcard
        key={item.title}
        iconUrl={item.icon}
        title={item.title}
        isActive={selectedSkill.title === item.title}
        onClick={() => {
          handleSelectSkill(item);
        }}/>
        ))}
       </div>
      
      <div className="skill-info">
        <SkillsInfoCard
        heading={selectedSkill.title}
        skills={selectedSkill.skills}
        />
      </div>
       </div>





       {/* <div className="front"> */}
       {/* <img src="/responsive-design.png"></img> */}
{/* </div> */}
       {/* <div className="back">
       <img src="/backend.png"></img>
        <h5>Backend</h5></div>
       <div className="Database">
       <img src="/technical-support.png"></img>
        <h5>Tools</h5></div>
       <div className="soft-skill">
      <img src="/skills.png"></img>
        <h5>Soft Skills</h5></div> */}


  
        
        </section>
     
  )
}

export default Skill
