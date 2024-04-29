export default function Section({ name, children, className = '', ...rest } : { name: string, children: React.ReactNode, className?: string, [key: string]: any }) {
  return (
    <section id={name} className={`${className} min-h-screen flex flex-col items-center`} {...rest}>
      {children}
    </section>
  );
}