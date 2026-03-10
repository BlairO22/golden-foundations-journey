interface GoldLineIconProps {
  type: 'empower' | 'build' | 'operate' | 'thrive' | 'clarity' | 'capacity' | 'cashflow' | 'confidence';
  size?: number;
}

const GoldLineIcon = ({ type, size = 48 }: GoldLineIconProps) => {
  const s = size;
  const icons: Record<string, React.ReactNode> = {
    empower: (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className="gold-icon">
        <circle cx="24" cy="16" r="8" />
        <path d="M24 28c-8 0-14 4-14 9v3h28v-3c0-5-6-9-14-9z" />
        <path d="M24 8v-4M18 10l-2-3M30 10l2-3" />
      </svg>
    ),
    build: (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className="gold-icon">
        <rect x="8" y="20" width="32" height="22" rx="1" />
        <path d="M24 6l-18 14h36L24 6z" />
        <rect x="18" y="30" width="12" height="12" rx="1" />
      </svg>
    ),
    operate: (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className="gold-icon">
        <circle cx="24" cy="24" r="10" />
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M10 38l4-4M34 14l4-4" />
      </svg>
    ),
    thrive: (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className="gold-icon">
        <path d="M24 42V20" />
        <path d="M24 20c0-8 8-14 16-14-2 8-8 14-16 14z" />
        <path d="M24 28c0-6-6-10-12-10 1.5 6 6 10 12 10z" />
        <path d="M18 42h12" />
      </svg>
    ),
    clarity: (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className="gold-icon">
        <circle cx="24" cy="20" r="12" />
        <path d="M24 8v-4" />
        <path d="M24 32v12" />
        <circle cx="24" cy="20" r="4" />
      </svg>
    ),
    capacity: (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className="gold-icon">
        <path d="M8 40l10-14 8 8 14-22" />
        <path d="M34 12h8v8" />
      </svg>
    ),
    cashflow: (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className="gold-icon">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 12v24" />
        <path d="M18 18c0-2 2.5-4 6-4s6 2 6 4-2.5 3-6 3-6 2-6 4 2.5 4 6 4 6-2 6-4" />
      </svg>
    ),
    confidence: (
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className="gold-icon">
        <path d="M24 4l6 12 13 2-9.5 9 2.5 13L24 34l-12 6 2.5-13L5 18l13-2L24 4z" />
      </svg>
    ),
  };

  return <>{icons[type]}</>;
};

export default GoldLineIcon;
