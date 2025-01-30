import LinkedIn from "react-devicons/linkedin/original";
import Github from "react-devicons/github/original";

export function ContactPage() {
  return (
    <div className="flex flex-col gap-4 py-10 max-w-3xl text-lg">
      <h1 className="text-5xl leading-normal font-serif">
        You can reach me at
      </h1>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <LinkedIn aria-hidden="true" />
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
          <Github aria-hidden="true" />
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
