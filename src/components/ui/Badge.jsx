
export default function Badge({ tool, className = "" }) {
  return (
    <li key={tool} className={`px-3 py-1 rounded-full transition ${className}`}>
      {tool}
    </li>
  );
}
