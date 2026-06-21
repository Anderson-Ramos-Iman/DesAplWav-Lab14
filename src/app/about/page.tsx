import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mi',
  description: `Conoce mas sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Kotlin',
    'Node.js',
    'Next.js',
    'PostgreSQL',
    'SQL',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mi</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hola, soy {personalInfo.name}
            </h2>
            <div className="prose text-gray-700 space-y-4">
              <p>
                Desarrollador de software con conocimientos en Kotlin,
                JavaScript, Node.js, TypeScript, Python y SQL, enfocado en la creacion
                de aplicaciones moviles y sistemas web.
              </p>
              <p>
                Cuento con experiencia en desarrollo de soluciones tecnologicas
                y soporte tecnico basico, incluyendo instalacion y configuracion
                de software.
              </p>
              <p>
                Me caracterizo por mi proactividad, responsabilidad y capacidad
                de trabajo en equipo, con una fuerte motivacion por seguir
                creciendo profesionalmente y aportar soluciones innovadoras y
                funcionales.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Habilidades Tecnicas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
