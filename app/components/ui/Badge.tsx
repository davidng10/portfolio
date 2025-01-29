export function Badge({
  label,
  icon,
}: {
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-stone-100 rounded-md px-3 py-1.5 w-fit flex items-center gap-2">
      {icon}
      <div className="text-sm">{label}</div>
    </div>
  );
}
