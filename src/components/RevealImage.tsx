import { useEffect, useRef, useState, CSSProperties } from "react";

interface RevealImageProps {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  flip?: boolean;
  style?: CSSProperties;
}

/**
 * Wraps an image in an overflow-hidden container and animates the image
 * from a zoomed-in state to its natural size when the container scrolls
 * into view. Used for editorial section reveals.
 */
const RevealImage = ({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  flip = false,
  style,
}: RevealImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        } else if (entry.boundingClientRect.top > 0) {
          setRevealed(false);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scaleFactor = revealed ? 1 : 1.1;
  const flipFactor = flip ? -1 : 1;

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover ${imgClassName}`}
        style={{
          transform: `scale(${scaleFactor * flipFactor}, ${scaleFactor})`,
          transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default RevealImage;
