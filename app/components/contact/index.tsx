import LinkedIn from "react-devicons/linkedin/original";
import Github from "react-devicons/github/original";

export function ContactPage() {
  return (
    <div className="flex flex-col gap-4 py-10 max-w-3xl text-lg">
      <p className="text-5xl leading-normal font-serif">You can reach me at</p>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <LinkedIn />
          <div>LinkedIn: </div>
        </div>
        <a
          className="text-blue-500"
          href="https://www.linkedin.com/in/ngwenbin/"
          target="_blank"
          rel="noreferrer"
        >
          @wenbinng
        </a>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <Github />
          <div>Github: </div>
        </div>
        <a
          className="text-blue-500"
          href="https://github.com/davidng10?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          @davidng10
        </a>
      </div>
    </div>
  );
}
