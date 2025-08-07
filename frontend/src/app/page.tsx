// src/app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Bienvenido a la página de inicio</h1>
      <p>Haz clic abajo para ir a la página de proyectos:</p>
      <Link href="/projects">Ir a Proyectos</Link>
    </main>
  );
}
