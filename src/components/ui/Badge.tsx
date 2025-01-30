import clsx from "clsx";

export function Badge({
  label,
  icon,
  className,
}: {
  label: string;
  icon?: ImageMetadata;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "bg-stone-100 px-2 py-1.5 w-fit flex items-center gap-2 font-light",
        className
      )}
    >
      {icon && (
        <img
          id={`${label}-icon`}
          src={icon.src}
          alt={label}
          className="w-4 h-4"
        />
      )}
      <div className="text-sm">{label}</div>
    </div>
  );
}
