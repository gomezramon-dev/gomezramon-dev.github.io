import SkillCategory from "./SkillCategory";

type TechSkills = {
  webDevelopment: string[];
  mobileDevelopment: string[];
  cloudComputing: string[];
  devOps: string[];
  databases: string[];
};

const Skills = () => {
  const techSkills: TechSkills = {
    webDevelopment: ["React", "TypeScript", "Node", "Springboot", "Express.js", "Django", "Flask", "FastAPI"],
    mobileDevelopment: ["React Native", "Firebase"],
    cloudComputing: ["AWS", "GCP", "Azure"],
    devOps: ["GitHub Actions", "Docker"],
    databases: ["MongoDB", "SQL Server", "PostgreSQL"],
  };

  return (
    <div id="skills" className="bg-white">
      <div className="flex flex-col min-h-screen horizontal-margin items-center justify-center gap-10" id="skills">
      <h1 className="text-4xl md:text-5xl text-secondary">skills</h1>
      <code className="w-full text-xl md:text-3xl whitespace-normal break-words tracking-wide">
        <span className="text-yellow-600"> const techSkills = &#123;</span>
        <br />
        {Object.keys(techSkills).map((category) => (
          <SkillCategory
            key={category}
            category={category}
            skills={techSkills[category as keyof TechSkills]}
          />
        ))}
        <span className="text-yellow-600">&#125;</span>
      </code>
    </div>
    </div>
  );
};

export default Skills;
