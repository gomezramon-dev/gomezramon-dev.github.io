interface Props {
  category: string;
  skills: string[];
}

const SkillCategory = ({ category, skills }: Props) => {
  return (
    <div className="text-xl md:text-2xl lg:text-3xl  leading-normal text-secondary">
      &nbsp; {category}
      <span className="text-stone-600">: </span>
      <span className="text-primary">[</span>
      <span className="text-stone-600">"</span>

      {skills.map((skill, index) => (
        
        <span key={index} className="text-primary">
          {index > 0 && <span className="text-stone-600">", "</span>}
          {skill}
        </span>
      ))}

      <span className="text-stone-600">"</span>
      <span className="text-primary">] </span>
      <span className="text-stone-600">,</span>
    </div>
      
  );
};

export default SkillCategory;