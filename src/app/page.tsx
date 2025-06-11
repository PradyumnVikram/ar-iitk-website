'use client';

import FooterWithMap from '../components/footer';

export default function Home() {
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
        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: '700',
            color: '#003153',
            letterSpacing: '0.08em',
            fontFamily: 'Orbitron',
            margin: 0,
          }}
        >
          Team Aerial Robotics
        </h1>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#003153',
            letterSpacing: '0.08em',
            fontFamily: 'Orbitron',
            marginTop: '1rem',
          }}
        >
          IIT Kanpur
        </h2>
      </section>

      {/* Footer Section - Remove wrapper and minHeight */}
      <FooterWithMap />
    </main>
  );
}
