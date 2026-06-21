import Link from 'next/link';
import { personalInfo } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre mi' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 font-display"
          >
            {personalInfo.name}
          </Link>
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
