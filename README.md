# &lt;HMG /&gt; — Portfolio Personal

Portfolio personal de **Héctor Matcovich González**, Frontend Developer & Web Designer con +12 años de experiencia. Construido con Next.js 14, TypeScript y Tailwind CSS.

🌐 **Live:** [hmatcovich.vercel.app](https://hmatcovich.vercel.app)

---

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 14 | App Router, SSG, i18n routing |
| [React](https://react.dev) | 18 | UI |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Estilos |
| [NextUI](https://nextui.org) | 2 | Componentes UI |
| [next-intl](https://next-intl-docs.vercel.app) | 3 | Internacionalización (ES / EN) |
| [next-themes](https://github.com/pacocoursey/next-themes) | — | Dark / Light mode |
| [Zustand](https://zustand-demo.pmnd.rs) | 5 | Estado global |
| [Swiper](https://swiperjs.com) | 11 | Carousels en modales |
| [Framer Motion](https://www.framer.com/motion) | 11 | Animaciones |
| [react-scroll](https://github.com/fisshy/react-scroll) | — | Navegación suave |
| [react-icons](https://react-icons.github.io/react-icons) | 5 | Iconografía |

---

## Características

- **Bilingüe** — Español e inglés con `next-intl` y rutas `/es` y `/en`
- **Dark / Light mode** — Persistente via `next-themes`
- **SSG** — Generación estática para máximo rendimiento
- **SEO optimizado** — `generateMetadata`, Open Graph, Twitter Cards, hreflang, `sitemap.xml`, `robots.txt`
- **Code splitting** — 6 cards de proyectos cargadas con `next/dynamic` + `ssr: false`
- **Lazy loading** — Imágenes de modales con `loading="lazy"` nativo
- **Responsive** — Mobile-first, adaptado a todos los tamaños

## Secciones

- **Inicio** — Hero con presentación y accesos rápidos
- **About** — Descripción profesional
- **Proyectos** — 6 proyectos con filtro por tecnología y modal con galería
- **Contacto** — Email y redes sociales

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Variables de entorno

Crea un archivo `.env.local` en la raíz:

```env
NEXT_PUBLIC_BASE_URL=https://tu-dominio.com
```

> Necesario para que `sitemap.xml` y `robots.txt` apunten a la URL correcta en producción.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── [locale]/           # Rutas con i18n (es/en)
│   │   ├── (web)/          # Layout principal (TopMenu + Sidebar + Footer)
│   │   ├── error.tsx       # Error boundary
│   │   └── not-found.tsx   # 404 con i18n
│   ├── sitemap.ts          # /sitemap.xml dinámico
│   └── robots.ts           # /robots.txt dinámico
├── components/ui/          # Componentes por sección
├── i18n/                   # Configuración next-intl (routing, request, navigation)
├── messages/               # Traducciones (es.json / en.json)
├── middleware.ts            # Detección y redirección de locale
└── store/                  # Zustand stores
```

---

## Deploy

El proyecto está desplegado en **Vercel** con detección automática de Next.js.

```bash
npm run build   # Verificar build antes de subir
```

---

## Autor

**Héctor Matcovich González**
Frontend Developer & Web Designer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/hectormatcovich)
[![Portfolio](https://img.shields.io/badge/Portfolio-hmatcovich.vercel.app-purple)](https://hmatcovich.vercel.app)
