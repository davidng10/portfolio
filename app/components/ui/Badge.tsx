import clsx from "clsx";

export function Badge({
  label,
  icon,
  className,
}: {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "bg-stone-100 rounded px-3 py-1.5 w-fit flex items-center gap-2 font-light",
        className
      )}
    >
      {icon}
      <div className="text-sm">{label}</div>
    </div>
  );
}
