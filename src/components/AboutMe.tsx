const AboutMe = () => {
  return (
    <div className="flex flex-col h-[920px] horizontal-padding items-center justify-evenly bg-secondary">
      <h1 className="text-8xl">about-me</h1>
      <code className="text-5xl text-center text-white leading-normal">
        console.log(
          <span className="text-primary">
            "Computer Science and Technology Student at ITESM. I have a strong passion for computer science, IT engineering, and software development. My purpose is to grow and learn resiliently in the face of adversity and to contribute to a friendly, supportive, and ethical environment."
          </span>
        )
      </code>
    </div>
  );
};

export default AboutMe;