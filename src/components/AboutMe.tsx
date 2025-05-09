const AboutMe = () => {
  return (
    <div id="aboutme" className="bg-secondary">
      <div className="flex flex-col min-h-screen horizontal-margin items-center justify-center gap-10">
        <h1 className="text-5xl">about-me</h1>
        <code className="text-xl md:text-3xl text-center text-white leading-normal whitespace-normal break-words">
          console.log(
          <span className="text-primary">
            "Computer Science and Technology Student at ITESM. I have a strong passion for computer science, IT engineering, and software development. My purpose is to grow and learn resiliently in the face of adversity and to contribute to a friendly, supportive, and ethical environment."
          </span>
          )
        </code>
      </div>
    </div>
  );
};

export default AboutMe;