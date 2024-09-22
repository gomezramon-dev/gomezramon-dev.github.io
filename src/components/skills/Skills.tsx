import SkillCategory from "./SkillCategory";

type TechSkills = {
  frontEnd: string[];
  backEnd: string[];
  cloudComputing: string[];
  databases: string[];
  lowLevelProgramming: string[];
  dataScience: string[];
  ai: string[];
  lowCodeTools: string[];
};

const Skills = () => {
  const techSkills: TechSkills = {
    frontEnd: ["JavaScript", "TypeScript", "React", "Next.js", "Bootstrap", "Tailwind"],
    backEnd: ["Node.js", "Express", "Flask", "Nest.js", "Java"],
    cloudComputing: ["GCP", "Firebase", "Netlify"],
    databases: ["NoSQL", "MongoDB", "InfluxDB", "PostgreSQL"],
    lowLevelProgramming: ["C", "C++", "GCC", "Rust"],
    dataScience: ["Python", "Pandas", "Numpy", "Matplotlib", "R"],
    ai: ["TensorFlow", "PyTorch"],
    lowCodeTools: ["Github", "Postman", "Figma", "Slack", "Trello", "Jira", "Grafana"]
  };

  return (
    <div className="flex flex-col h-[920px] horizontal-padding items-center justify-evenly" id="skills">
      <h1 className="text-8xl text-secondary">skills</h1>
      <code className="text-4xl leading-normal text-secondary">
        const techSkills = &#123;
        <br />
        {Object.keys(techSkills).map((category) => (
          <SkillCategory category={category} skills={techSkills[category as keyof TechSkills]} />
        ))}
        &#125;
      </code>
    </div>
  );
};

export default Skills;
