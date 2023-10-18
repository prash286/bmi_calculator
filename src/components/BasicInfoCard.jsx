export default function BasicInfoCard({ icon, title, info }) {
  return (
    <div className="w-[300px] flex flex-col gap-3 mt-4 shadow-[9px_10px_12px_7px_#8cabab2e] p-5">
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-bold">{title}</span>
      </div>
      <p className="text-sm">{info}</p>
    </div>
  );
}
