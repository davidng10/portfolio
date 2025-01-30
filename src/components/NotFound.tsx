export function NotFound() {
  return (
    <div className=" gap-8 flex flex-col items-center justify-center absolute inset-0">
      <p className="text-4xl font-[Signifier] text-center">
        Hey, you&apos;re not supposed to be here
      </p>
      <a className="text-blue-500" href="/">
        Return to main page
      </a>
    </div>
  );
}
