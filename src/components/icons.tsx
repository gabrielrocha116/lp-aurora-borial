type IconProps = { className?: string };

export function BellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c-3.1 0-5.4 2.4-5.4 5.6v2.6c0 .8-.3 1.6-.9 2.2l-1.1 1.2c-.6.6-.2 1.7.7 1.7h13.4c.9 0 1.3-1.1.7-1.7l-1.1-1.2c-.6-.6-.9-1.4-.9-2.2V9.1c0-3.2-2.3-5.6-5.4-5.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 19.5a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15 9l-2 5-4 1 2-5 4-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ApertureIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 6.5 15 12l-3 5.5-3-5.5 3-5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8.5" r="2.8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.8 19c.6-3 2.7-4.6 5.2-4.6s4.6 1.6 5.2 4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.5 6a2.6 2.6 0 1 1 0 5.2M17.2 14.7c2 .5 3.4 1.9 3.9 4.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 20V9M11 20V4M18 20v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RouteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="5.5" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18.5" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 8v3a3 3 0 0 0 3 3h5a3 3 0 0 1 3 3v1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.5 2.5"
      />
    </svg>
  );
}

export const featureIcons = {
  bell: BellIcon,
  compass: CompassIcon,
  aperture: ApertureIcon,
  users: UsersIcon,
  chart: ChartIcon,
  route: RouteIcon,
};

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.6 6.1 6.6.6-5 4.4 1.5 6.5L12 16.8 6.3 20.1l1.5-6.5-5-4.4 6.6-.6L12 2.5Z" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s-6.5-5.6-6.5-10.8A6.5 6.5 0 0 1 12 3.7a6.5 6.5 0 0 1 6.5 6.5C18.5 15.4 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.2" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 20.2s-7.8-4.6-9.7-9.4C.9 7.2 2.9 4 6.4 4c2 0 3.5 1 5.6 3.3C14.1 5 15.6 4 17.6 4c3.5 0 5.5 3.2 4.1 6.8-1.9 4.8-9.7 9.4-9.7 9.4Z" />
    </svg>
  );
}

export const statIcons = {
  users: UsersIcon,
  pin: MapPinIcon,
  star: StarIcon,
  heart: HeartIcon,
};

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.6 10.5 20 3h-2l-5.5 6.4L8 3H3l6.7 9.7L3 21h2l5.9-6.8L15.6 21H21l-7.4-10.5Zm-2.1 2.4-.7-1L5.4 4.4h2.3l4.4 6.2.7 1 5.7 8.1h-2.3l-4.7-6.8Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.3v5.4l4.8-2.7-4.8-2.7Z" fill="currentColor" />
    </svg>
  );
}

export const socialIcons = {
  X: XIcon,
  IG: InstagramIcon,
  YT: YoutubeIcon,
};
