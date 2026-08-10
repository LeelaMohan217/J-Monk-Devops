const DigiConnectIllustration = ({ className }) => (
  <svg viewBox="0 0 240 200" fill="none" className={className}>
    <line x1="120" y1="100" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <line x1="120" y1="100" x2="180" y2="60" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <line x1="120" y1="100" x2="50" y2="140" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <line x1="120" y1="100" x2="190" y2="140" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <line x1="120" y1="100" x2="120" y2="170" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <line x1="60" y1="60" x2="120" y2="170" stroke="currentColor" strokeWidth="1" className="text-neutral-200" />
    <line x1="180" y1="60" x2="190" y2="140" stroke="currentColor" strokeWidth="1" className="text-neutral-200" />
    <circle cx="60" cy="60" r="6" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <circle cx="180" cy="60" r="6" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <circle cx="50" cy="140" r="6" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <circle cx="190" cy="140" r="6" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <circle cx="120" cy="170" r="6" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <circle cx="120" cy="100" r="9" fill="#dc2626" />
  </svg>
);

const SkillConnectIllustration = ({ className }) => (
  <svg viewBox="0 0 240 200" fill="none" className={className}>
    <rect x="45" y="140" width="26" height="40" rx="2" className="fill-neutral-100 stroke-neutral-300" strokeWidth="1.5" />
    <rect x="95" y="110" width="26" height="70" rx="2" className="fill-neutral-100 stroke-neutral-300" strokeWidth="1.5" />
    <rect x="145" y="75" width="26" height="105" rx="2" className="fill-neutral-100 stroke-neutral-300" strokeWidth="1.5" />
    <rect x="195" y="45" width="26" height="135" rx="2" className="fill-neutral-100 stroke-neutral-300" strokeWidth="1.5" />
    <path
      d="M45 150 L108 115 L158 80 L208 48"
      stroke="#dc2626"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    <circle cx="208" cy="48" r="7" fill="#dc2626" />
  </svg>
);

const EduConnectIllustration = ({ className }) => (
  <svg viewBox="0 0 240 200" fill="none" className={className}>
    <circle cx="105" cy="110" r="55" stroke="currentColor" strokeWidth="1.5" className="text-neutral-300" />
    <ellipse cx="105" cy="110" rx="55" ry="20" stroke="currentColor" strokeWidth="1" className="text-neutral-200" />
    <ellipse cx="105" cy="110" rx="20" ry="55" stroke="currentColor" strokeWidth="1" className="text-neutral-200" />
    <line x1="50" y1="110" x2="160" y2="110" stroke="currentColor" strokeWidth="1" className="text-neutral-200" />
    <path
      d="M132 78 Q 175 60 205 40"
      stroke="#dc2626"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    <circle cx="205" cy="40" r="7" fill="#dc2626" />
  </svg>
);

export const platformIllustrations = {
  "01": DigiConnectIllustration,
  "02": SkillConnectIllustration,
  "03": EduConnectIllustration,
};
