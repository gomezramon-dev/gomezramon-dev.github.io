import ImageCarrousel from "./ImageCarrousel";
import slide1 from "../assets/01.png";
import slide2 from "../assets/02.png";
import slide3 from "../assets/03.png";

const Projects = () => {
  return (
   <div id="projects" className="bg-white">
      <div className="flex flex-col min-h-screen horizontal-margin items-center justify-center gap-10">
        <h1 className="text-4xl md:text-5xl text-secondary">projects</h1>
        <ImageCarrousel
          items={[slide1, slide2, slide3]}
          interval={4000}
        />
      </div>
    </div>
  );
};

export default Projects;