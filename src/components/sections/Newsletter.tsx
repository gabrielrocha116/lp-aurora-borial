import MagneticButton from "@/components/ui/MagneticButton";
import Avatar from "@/components/ui/Avatar";
import { communityAvatars } from "@/data/mock";

export default function NewsletterCard() {
  return (
    <div id="newsletter" className="glass-panel flex h-full flex-col justify-center rounded-3xl p-8">
      <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary">
        Stay In The Loop
      </h3>
      <p className="mt-3 text-sm text-text-secondary">
        Subscribe to get aurora alerts and best travel tips.
      </p>

      <form className="mt-6 flex flex-col gap-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <div className="flex gap-2">
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email address"
            className="focus-ring w-full rounded-full border border-glass-border bg-white/5 px-5 py-3 text-sm text-text-primary placeholder:text-text-secondary"
          />
          <MagneticButton
            type="submit"
            data-cursor="link"
            data-cursor-label="Go"
            className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-aurora text-void"
            aria-label="Subscribe"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>
        </div>
      </form>

      <div className="mt-6 flex items-center gap-3 text-sm text-text-secondary">
        <div className="flex -space-x-3">
          {communityAvatars.map((name) => (
            <Avatar key={name} name={name} size={32} />
          ))}
        </div>
        <span>Join 25,000+ explorers</span>
      </div>
    </div>
  );
}
