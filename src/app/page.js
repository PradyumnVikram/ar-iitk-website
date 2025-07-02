'use client';

import FooterWithMap from '../components/footer';
import InfoCard from '../components/Card';

function HeroSection() {
  return (
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
          fontFamily: 'Orbitron, sans-serif',
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
          fontFamily: 'Orbitron, sans-serif',
          marginTop: '1rem',
        }}
      >
        IIT Kanpur
      </h2>
    </section>
  );
}

function AboutUsSection() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '4rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1f2937',
          fontFamily: 'Orbitron, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '2.5rem',
        }}
      >
        About Us
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <InfoCard
          icon="👥"
          heading="Multidisciplinary Team"
          content="Students from diverse backgrounds at IIT Kanpur collaborate to design, build, and program autonomous aerial robots."
        />
        <InfoCard
          icon="🛠️"
          heading="End-to-End Engineering"
          content="We handle every aspect—from mechanical design and electronics to control, vision, and flight software—delivering complete UAV solutions."
        />
        <InfoCard
          icon="🌏"
          heading="Real-World Impact"
          content="Our drones tackle search, rescue, mapping, and inspection challenges, with proven performance in international competitions."
        />
        <InfoCard
          icon="🏆"
          heading="Global Recognition"
          content="Consistently ranked among the world’s best, we represent IIT Kanpur at ICUAS, IMAV, IARC, and Inter-IIT Tech Meets."
        />
      </div>
    </section>
  );
}

function SubsystemsSection() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '4rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1f2937',
          fontFamily: 'Orbitron, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '2rem',
        }}
      >
        Our Subsystems
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <InfoCard icon="🔧" heading="Hardware & Firmware" />
        <InfoCard icon="🖼️" heading="Visual Processing and Algorithms" />
        <InfoCard icon="🎮" heading="Control Systems" />
        <InfoCard icon="🗺️" heading="Path Planning & Localization" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      <HeroSection />
      <AboutUsSection />
      <SubsystemsSection />
      <div style={{ height: '8rem' }} />
      <FooterWithMap />
    </main>
  );
}
