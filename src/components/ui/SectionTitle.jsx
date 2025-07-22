// src/components/ui/SectionTitle.jsx
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
