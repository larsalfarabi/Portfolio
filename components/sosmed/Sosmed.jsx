import { sosmed } from "@/utils/data";

export default function Sosmed() {
  return (
    <ul data-reveal-list className="flex flex-wrap gap-x-6 gap-y-2">
      {sosmed.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
            {item.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              &#8599;
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
