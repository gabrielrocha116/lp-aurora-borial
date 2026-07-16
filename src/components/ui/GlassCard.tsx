import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type GlassCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  hover?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function GlassCard<T extends ElementType = "div">({
  as,
  children,
  className = "",
  hover = false,
  ...props
}: GlassCardProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- polymorphic `as` tag can't be narrowed by TS at the JSX call site.
  const Tag = (as ?? "div") as any;

  return (
    <Tag className={`glass-panel rounded-3xl ${hover ? "card-hover" : ""} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
