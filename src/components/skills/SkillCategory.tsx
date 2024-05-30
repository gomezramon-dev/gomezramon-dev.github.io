interface Props {
  category: string;
  skills: string[];
}

const SkillCategory = ({ category, skills }: Props) => {
  return (
    <div className="text-4xl leading-normal text-white">
      &nbsp; {category}
      <span className="text-secondary">: [</span>{" "}
      {skills.map((skill, index) => (
        <span key={index}>
          {index > 0 && ", "}
          {skill}
        </span>
      ))}
      <span className="text-secondary"> ],</span>
    </div>
      
  );
};

export default SkillCategory;