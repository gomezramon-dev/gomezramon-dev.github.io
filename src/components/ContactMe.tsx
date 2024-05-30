const ContactMe = () => {
  return (
    <div className="flex flex-col h-[920px] items-center justify-center gap-16">
      <h1 className="text-8xl">contact-me</h1>
      <div className="flex gap-16">
        <button className="w-[260px] h-[52px]">
          <a className="flex gap-4" target="_blank" href="https://github.com/gomezramon2004">
            Github Account
          </a>
        </button>
        <button className="w-[300px] h-[52px]">
          <a className="flex gap-4" target="_blank" href="https://www.linkedin.com/in/gomezramon2004/">
            LinkedIn Profile
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactMe;