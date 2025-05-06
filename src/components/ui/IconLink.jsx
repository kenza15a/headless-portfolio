// components/IconLink.tsx

export default function IconLink({ href, label, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`transition ${className}`}
    >
      {children} {/**the icon */}
    </a>
  );
}
