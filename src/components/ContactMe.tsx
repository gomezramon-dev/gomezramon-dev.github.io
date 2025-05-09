const ContactMe = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-16" id="contactme">
      <h1 className="text-5xl">contact-me</h1>
      <div className="flex gap-16">
        <a className="flex gap-4 no-underline hover:text-hover" target="_blank" rel="noopener noreferrer" href="https://github.com/gomezramon-dev">
          <button className="w-[260px] h-[52px] no-underline">
            Github Account
          </button>
        </a>
        <a className="flex gap-4 no-underline hover:text-hover" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gomezramon2004/">
          <button className="w-[300px] h-[52px]">
            LinkedIn Profile
          </button>
        </a>

      </div>
    </div>
  );
};

export default ContactMe;