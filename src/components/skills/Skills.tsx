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
    mobileDevelopment: ["React Native", "Firebase", "Flask", "Nest.js", "Java"],
    cloudComputing: ["AWS", "GCP", "Azure"],
    devOps: ["GitHub Actions", "Docker"],
    databases: ["MongoDB", "SQL Server", "PostgreSQL"],
  };

  return (
    <div className="flex flex-col min-h-screen horizontal-margin items-center justify-center gap-10" id="skills">
      <h1 className="text-4xl md:text-5xl text-secondary">skills</h1>
      <code className="w-full text-xl md:text-2xl lg:text-3xl leading-normal text-secondary whitespace-normal break-words">
        const techSkills = &#123;
        <br />
        {Object.keys(techSkills).map((category) => (
          <SkillCategory
            key={category}
            category={category}
            skills={techSkills[category as keyof TechSkills]}
          />
        ))}
        &#125;
      </code>
    </div>
  );
};

export default Skills;
