import MarqueeStrip from "./components/MarqueeStrip";

const keywords = [
  "Custom Software Development",
  "Cloud & Infrastructure",
  "DevOps & Automation",
  "SaaS Product Development",
  "API Integration",
  "Skill Development",
  "Global Education Guidance",
  "Technical Consulting",
];

const TrustMarquee = () => {
  return (
    <div className="bg-neutral-950 border-t border-white/10 py-6">
      <MarqueeStrip items={keywords} />
    </div>
  );
};

export default TrustMarquee;
