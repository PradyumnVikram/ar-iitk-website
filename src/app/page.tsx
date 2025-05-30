import styles from './page.module.css'

export default function Home() {
  return (
    <div style={{ 
      textAlign: 'center',
    }}>
      <h1
        style={{
          position: 'absolute',
          bottom: 'clamp(8rem, 15vh, 12rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: '700', // Changed from 900 to 700
          color: '#003153',
          letterSpacing: '0.08em',
          fontFamily: 'Orbitron',
          margin: 0,
          width: '100%',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      >
        Team Aerial Robotics
      </h1>
      <h2
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 5vh, 4rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          fontWeight: '700', // Same weight as h1
          color: '#003153',
          letterSpacing: '0.08em',
          fontFamily: 'Orbitron, monospace',
          margin: 0,
          width: '100%',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      >
        IIT Kanpur
      </h2>
    </div>
  )
}
