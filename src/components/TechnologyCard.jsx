import Badge from "./ui/Badge";

export default function TechnologyCard({ title, tools }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">{title}</h3>
      <ul className="flex flex-wrap gap-2 text-gray-600 text-sm">
        {tools.map((tool) => (
          <Badge
            key={tool}
            tool={tool}
            className="bg-gray-100 hover:bg-blue-100"
          />
        ))}
      </ul>
    </div>
  );
}
