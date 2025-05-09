const Certifications = () => {
  return (
    <div id="certifications" className="bg-primary">
      <div className="flex flex-col min-h-screen horizontal-margin items-center justify-center gap-16">
        <h1 className="text-4xl md:text-5xl">certifications</h1>
        <div className="flex w-full flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
          <a
            className="no-underline hover:text-hover"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cloudskillsboost.google/public_profiles/c2fda0de-854a-4728-b6fc-779f425a5538?locale=es"
          >
            <button className="w-[300px] md:w-[260px] h-[52px]">
              GCP Foundations
            </button>
          </a>
          <a
            className="no-underline hover:text-hover"
            target="_blank"
            rel="noopener noreferrer"
            href="https://learn.microsoft.com/api/credentials/share/en-us/RamonAlbertoGomezUrquidez-8601/5E7B49DA30893E77?sharingId=F257B13A3C3C1C20"
          >
            <button className="w-[300px] md:w-[300px] h-[52px]">
              Azure AI Engineer
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;