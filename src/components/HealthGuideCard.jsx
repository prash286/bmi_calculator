export default function HealthGuideCard({ children, title, description }) {
  return (
    <div className="flex flex-col gap-[0.8rem]">
      {children}
      <span className="font-bold">{title}</span>
      <p className="text-sm">{description}</p>
    </div>
  );
}
