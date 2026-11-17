// Profile links shown in the hero and on the Work page.
// Set a value to null to hide that link.
export const LINKS: { label: string; href: string | null; download?: boolean }[] = [
  { label: 'Resume (PDF)', href: '/Rodrigo_Thauby_Resume.pdf', download: false },
  { label: 'LinkedIn', href: null }, // TODO: add your LinkedIn profile URL, e.g. https://www.linkedin.com/in/your-handle
  { label: 'GitHub', href: 'https://github.com/rthauby' },
];

export function ProfileLinks({ className = '', includeResume = true }: { className?: string, includeResume?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {LINKS.filter((l) => l.href && (includeResume || !l.href.endsWith('.pdf'))).map((l) => (
        <a
          key={l.label}
          href={l.href as string}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto rounded-full border border-gray-400 dark:border-gray-600 px-5 py-2 text-lg font-semibold tracking-normal hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
