// SkillCard.js

import React from 'react';

const SkillCard = ({ skillName, proficiency }) => {
  return (
    <div className="skill-card">
      <h3>{skillName}</h3>
      <p>Proficiency: {proficiency}</p>
    </div>
  );
};

export default SkillCard;
