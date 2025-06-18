'use client';

import FooterWithMap from 'components/footer';

export default function Page() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
      </section>

      {/* Footer Section - Remove wrapper and minHeight */}
      <FooterWithMap />
    </main>
  );
}
