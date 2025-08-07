'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bienvenido</h1>
      <p>Selecciona una opción:</p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <button type="button" onClick={() => handleNavigation('/projects')}>
          Ver todos mis proyectos
        </button>

        <button type="button" onClick={() => handleNavigation('/projects/favorites')}>
          Ver favoritos
        </button>
      </form>
    </main>
  );
}
