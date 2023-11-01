export default function HealthGuideCard({
  children,
  title,
  description,
  fadeDirection,
}) {
  return (
    <div className="flex flex-col gap-[0.8rem]" data-aos={fadeDirection}>
      {children}
      <span className="font-bold">{title}</span>
      <p className="text-sm">{description}</p>
    </div>
  );
}
