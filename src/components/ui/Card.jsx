// src/components/ui/Card.jsx
export default function Card({ icon, title, text }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow hover:shadow-lg transition-all">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
    </div>
  );
}
