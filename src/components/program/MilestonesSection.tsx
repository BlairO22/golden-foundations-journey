import { useScrollReveal } from "@/hooks/useScrollReveal";

const milestones = [
  { num: 1, title: "Foundation Profile Complete", week: "Week 1", state: "complete" },
  { num: 2, title: "Personal Vision & Values Locked", week: "Week 4", state: "complete" },
  { num: 3, title: "ICP & Offer Finalized", week: "Week 7", state: "complete" },
  { num: 4, title: "Brand Identity Live", week: "Week 9", state: "progress" },
  { num: 5, title: "Website & Booking System Live", week: "Week 12", state: "progress" },
  { num: 6, title: "First Client Enrolled", week: "Week 16–20", state: "upcoming" },
  { num: 7, title: "Operational Systems Complete", week: "Week 18", state: "upcoming" },
  { num: 8, title: "Growth Plan Documented", week: "Week 22", state: "upcoming" },
  { num: 9, title: "Transformation Scorecard Complete", week: "Week 24", state: "upcoming" },
];

const MilestoneMarker = ({ state }: { state: string }) => {
  if (state === "complete") {
    return (
      <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7l3.5 3.5L12 4" stroke="hsl(220 46% 20%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (state === "progress") {
    return (
      <div className="w-8 h-8 rounded-full border-2 border-gold relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gold/40" />
      </div>
    );
  }
  return <div className="w-8 h-8 rounded-full border-2 border-gold/40" />;
};

const MilestonesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-20">
          <h2 className="heading-display text-4xl md:text-5xl text-navy">
            9 milestones. Tangible proof that the work is working.
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-4 left-4 right-4 h-px bg-gold/30" />

            <div className="grid grid-cols-9 gap-2">
              {milestones.map((m) => (
                <div key={m.num} className="flex flex-col items-center text-center relative">
                  <MilestoneMarker state={m.state} />
                  <p className="font-body text-xs font-semibold text-gold mt-4 mb-1">{m.week}</p>
                  <p className="font-body text-xs text-charcoal/70 leading-tight">{m.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-6 mb-16">
          {milestones.map((m) => (
            <div key={m.num} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <MilestoneMarker state={m.state} />
                <div className="w-px h-6 bg-gold/30" />
              </div>
              <div className="pt-1">
                <p className="font-body text-xs font-semibold text-gold mb-1">{m.week}</p>
                <p className="font-body text-sm text-charcoal/80">{m.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-charcoal/60 text-center max-w-xl mx-auto leading-relaxed">
          All milestones are tracked inside ON Platform™, your personal dashboard for monitoring progress, completing playbooks, and reviewing your Transformation Scorecard.
        </p>
      </div>
    </section>
  );
};

export default MilestonesSection;
