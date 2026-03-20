import React from "react";

/* ─────────────────────────────────────────────
   Reusable shimmer block primitive
───────────────────────────────────────────── */
interface ShimmerProps {
  className?: string;
  style?: React.CSSProperties;
}

const Shimmer: React.FC<ShimmerProps> = ({ className = "", style }) => (
  <div className={`skeleton-shimmer ${className}`} style={style} />
);

/* ─────────────────────────────────────────────
   Full-page skeleton that mirrors the portfolio
   layout so the transition feels seamless.
───────────────────────────────────────────── */
const PageSkeleton: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full overflow-hidden"
      style={{ background: "#030014" }}
      aria-label="Loading…"
      aria-busy="true"
    >
      {/* ── Navbar skeleton ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10"
        style={{
          height: "64px",
          background: "rgba(10,10,26,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Logo */}
        <Shimmer className="w-10 h-10 rounded-xl" />

        {/* Nav links */}
        <div className="hidden lg:flex gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Shimmer key={i} className="h-8 rounded-lg" style={{ width: `${52 + i * 8}px` }} />
          ))}
        </div>

        {/* CTA button */}
        <Shimmer className="hidden lg:block w-28 h-9 rounded-lg" />

        {/* Mobile hamburger */}
        <Shimmer className="lg:hidden w-10 h-10 rounded-xl" />
      </div>

      {/* ── Hero section skeleton ── */}
      <section
        className="flex flex-col items-center justify-center px-6 pt-32 pb-24"
        style={{ minHeight: "100vh" }}
      >
        {/* Badge pill */}
        <Shimmer className="w-40 h-7 rounded-full mb-8" />

        {/* Headline — two lines */}
        <Shimmer className="w-[min(600px,90%)] h-14 rounded-2xl mb-4" />
        <Shimmer className="w-[min(420px,70%)] h-14 rounded-2xl mb-8" />

        {/* Subtext */}
        <Shimmer className="w-[min(520px,80%)] h-5 rounded-xl mb-3" />
        <Shimmer className="w-[min(380px,65%)] h-5 rounded-xl mb-12" />

        {/* CTA buttons */}
        <div className="flex gap-4">
          <Shimmer className="w-36 h-11 rounded-xl" />
          <Shimmer className="w-36 h-11 rounded-xl" />
        </div>

        {/* Scroll indicator */}
        <Shimmer className="mt-16 w-8 h-14 rounded-full" />
      </section>

      {/* ── Section skeleton (About / Experience / Skills / etc.) ── */}
      {Array.from({ length: 2 }).map((_, sectionIndex) => (
        <section
          key={sectionIndex}
          className="px-6 lg:px-16 py-24 max-w-7xl mx-auto"
        >
          {/* Section label + heading */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <Shimmer className="w-28 h-7 rounded-full" />
            <Shimmer className="w-64 h-10 rounded-2xl" />
            <Shimmer className="w-80 h-5 rounded-xl" />
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, cardIndex) => (
              <div
                key={cardIndex}
                className="rounded-3xl p-8 flex flex-col gap-4"
                style={{
                  background: "rgba(17,24,39,0.6)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Card header row */}
                <div className="flex items-center justify-between">
                  <Shimmer className="w-32 h-6 rounded-lg" />
                  <Shimmer className="w-16 h-7 rounded-2xl" />
                </div>

                {/* Meta */}
                <Shimmer className="w-48 h-4 rounded-lg" />
                <Shimmer className="w-36 h-4 rounded-lg" />

                {/* Body text */}
                <Shimmer className="w-full h-4 rounded-lg" />
                <Shimmer className="w-[85%] h-4 rounded-lg" />
                <Shimmer className="w-[70%] h-4 rounded-lg" />

                {/* Divider */}
                <div
                  className="my-2"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, t) => (
                    <Shimmer key={t} className="h-7 rounded-xl" style={{ width: `${48 + t * 8}px` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ── Purple glow orb (matches site aesthetic) ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(139,92,246,0.12), transparent)",
        }}
      />
    </div>
  );
};

export default PageSkeleton;
