# Lab14 - Portafolio Web con SEO

## Descripcion del proyecto

Este proyecto es un portafolio web desarrollado con **Next.js**, **TypeScript** y **Tailwind CSS**. Usa el **App Router** y actualmente incluye paginas para:

- Inicio (`/`)
- Sobre mi (`/about`)
- Proyectos (`/projects`)
- Detalle dinamico de proyectos (`/projects/[slug]`)

Tambien incorpora configuracion SEO basica mediante:

- `src/app/layout.tsx` para `metadata`
- `src/app/sitemap.ts` para `sitemap.xml`
- `src/app/robots.ts` para `robots.txt`

La informacion principal del portafolio se centraliza en `lib/data.ts`, incluyendo datos personales, enlaces y lista de proyectos.

## Estructura actual del proyecto

```text
my-portfolio/
├── lib/
│   └── data.ts
├── public/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ProjectCard.tsx
│   └── types/
│       └── index.ts
├── package.json
└── README.md
```

## Tarea del laboratorio

**Objetivo:** Complementar y desplegar la aplicacion web con SEO optimizado.

### Requerimientos

1. Añadir una pagina de contacto.
   - Actualizar el archivo `sitemap.xml`.
   - Actualizar el archivo `robots.txt`.

2. Configurar un dominio personalizado para la aplicacion web.
   - Desplegar la aplicacion web en Vercel.
   - Obtener un dominio gratuito y asociarlo desde Vercel.

## Alcance tecnico dentro del proyecto

Dentro de este repositorio se puede trabajar directamente en:

- Crear la ruta `src/app/contact/page.tsx`
- Agregar metadata SEO para la nueva pagina
- Actualizar `src/app/sitemap.ts`
- Actualizar `src/app/robots.ts`
- Ajustar navegacion en componentes como `src/components/Header.tsx` y `src/components/Footer.tsx`
- Preparar contenido y enlaces de contacto usando los datos de `lib/data.ts`

## Recursos de la tarea

- https://www.freenom.com/es/index.html
- https://vercel.com/docs/domains/working-with-domains/add-a-domain
