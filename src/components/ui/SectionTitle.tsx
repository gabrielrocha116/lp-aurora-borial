type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrowColor?: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowColor = "var(--color-aurora-green)",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}>
      <p className="text-xs font-medium tracking-wide uppercase" style={{ color: eyebrowColor }}>
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-text-primary">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-text-secondary">{description}</p>}
    </div>
  );
}
