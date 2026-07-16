const PALETTES = [
  ["#4ADE80", "#1c8f6e"],
  ["#A855F7", "#4a3785"],
  ["#EC4899", "#c25a94"],
  ["#22a582", "#4ADE80"],
  ["#6c46c9", "#A855F7"],
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Avatar({
  name,
  size = 36,
  className,
  ringed = true,
}: {
  name: string;
  size?: number;
  className?: string;
  ringed?: boolean;
}) {
  const paletteIndex =
    name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) % PALETTES.length;
  const [from, to] = PALETTES[paletteIndex];

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-display font-medium text-void ${ringed ? "border-2 border-void" : ""} ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.38,
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
      aria-hidden="true"
    >
      {initialsOf(name)}
    </span>
  );
}
