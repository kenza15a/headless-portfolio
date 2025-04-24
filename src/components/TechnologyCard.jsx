export default function TechnologyCard({ title, tools }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">{title}</h3>
      <ul className="flex flex-wrap gap-2 text-gray-600 text-sm">
        {tools.map((tool) => (
          <li
            key={tool}
            className="bg-gray-100 px-3 py-1 rounded-full hover:bg-blue-100 transition"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
