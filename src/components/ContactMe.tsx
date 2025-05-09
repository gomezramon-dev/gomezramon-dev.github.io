const ContactMe = () => {
  return (
    <div id="contactme" className="flex flex-col min-h-screen horizontal-margin items-center justify-center gap-16">
      <h1 className="text-4xl md:text-5xl">contact-me</h1>
      <div className="flex w-full flex-col md:flex-row gap-8 sm:gap-16 items-center justify-center">
        <a
          className="no-underline hover:text-hover"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/gomezramon-dev"
        >
          <button className="w-[300px] md:w-[260px] h-[52px]">
            Github Account
          </button>
        </a>
        <a
          className="no-underline hover:text-hover"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/gomezramon-dev"
        >
          <button className="w-[300px] md:w-[300px] h-[52px]">
            LinkedIn Profile
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;