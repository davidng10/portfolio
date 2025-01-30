import linkedIn from "../../assets/linkedIn-logo.svg";
import github from "../../assets/github-logo.svg";

export function ContactPage() {
  return (
    <div className="flex flex-col gap-4 py-10 max-w-3xl text-lg">
      <h1 className="text-5xl leading-normal font-[Signifier]">
        You can reach me at
      </h1>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <img
            src={linkedIn.src}
            alt="LinkedIn"
            aria-hidden="true"
            className="w-5 h-5"
          />
          <div>LinkedIn: </div>
        </div>
        <a
          className="text-blue-500"
          href="https://www.linkedin.com/in/ngwenbin/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Wen Bin's LinkedIn profile"
        >
          @wenbinng
        </a>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <img
            src={github.src}
            alt="Github"
            aria-hidden="true"
            className="w-5 h-5"
          />
          <div>Github: </div>
        </div>
        <a
          className="text-blue-500"
          href="https://github.com/davidng10?tab=repositories"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Wen Bin's GitHub repositories"
        >
          @davidng10
        </a>
      </div>
    </div>
  );
}
