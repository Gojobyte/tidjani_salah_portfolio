// src/components/ui/Button.jsx
export default function Button({
  children,
  variant = 'primary',
  href = '#',
  external = false,
  className = '',
}) {
  const baseStyles = 'px-5 py-2.5 text-sm font-medium transition rounded-sm';
  const variants = {
    primary: 'text-white bg-primary hover:bg-primary/90 shadow',
    outline: 'border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800',
    ghost: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
      {children}
    </a>
  ) : (
    <a href={href} className={styles}>
      {children}
    </a>
  );
}
