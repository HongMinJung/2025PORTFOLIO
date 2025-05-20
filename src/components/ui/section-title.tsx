interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
