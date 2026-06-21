import type { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name} para colaboraciones, proyectos o consultas profesionales.`,
  openGraph: {
    title: `Contacto | ${personalInfo.name}`,
    description: `Canales de contacto y redes profesionales de ${personalInfo.name}.`,
    url: `${personalInfo.siteUrl}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contacto | ${personalInfo.name}`,
    description: `Escribe a ${personalInfo.name} para colaborar o conversar sobre nuevos proyectos.`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-10">
          Si deseas conversar sobre un proyecto, una oportunidad laboral o una
          colaboracion, aqui tienes mis principales canales de contacto.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Email</h2>
            <p className="text-gray-700 break-all">{personalInfo.email}</p>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">GitHub</h2>
            <p className="text-gray-700">Ver perfil y repositorios</p>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              LinkedIn
            </h2>
            <p className="text-gray-700">Conectar en mi red profesional</p>
          </a>
        </div>

        <section className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Trabajemos juntos
          </h2>
          <p className="text-gray-700 mb-4">
            Estoy disponible para desarrollar experiencias web modernas,
            optimizar productos existentes y colaborar en soluciones digitales.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
            >
              Enviar correo
            </a>
            <Link
              href="/projects"
              className="rounded-lg border border-blue-200 bg-white px-5 py-3 text-blue-700 transition hover:bg-blue-100"
            >
              Ver proyectos
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
