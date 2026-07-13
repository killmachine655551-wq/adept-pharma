import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';

interface AdeptLogoProps {
  showText?: boolean;
  showSubtitle?: boolean;
  iconOnly?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export default function AdeptLogo({
  showText = true,
  showSubtitle = true,
  iconOnly = false,
  theme = 'light',
  className = '',
}: AdeptLogoProps) {
  const isDark = theme === 'dark';

  if (iconOnly || !showText) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-10 w-10 shrink-0 ${className}`}
      >
        <defs>
          <linearGradient id="adeptGradLeft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="adeptGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="60%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="adeptGradBase" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#0099ff" />
            <stop offset="100%" stopColor="#00ccff" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M 50 12 L 15 80 L 32 80 L 46 52 L 42 42 Z"
            fill="url(#adeptGradLeft)"
          />
          <path
            d="M 50 12 L 85 80 L 68 80 L 54 52 L 58 42 Z"
            fill="url(#adeptGradRight)"
          />
          <path
            d="M 32 80 L 68 80 L 50 44 L 46 52 L 54 52 Z"
            fill="url(#adeptGradBase)"
          />
        </g>
      </svg>
    );
  }

  return (
    <div className={`flex items-center ${className}`} id="adept-logo-container">
      <img
        src={isDark ? logoDark : logoLight}
        alt="Adept Pharma"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
