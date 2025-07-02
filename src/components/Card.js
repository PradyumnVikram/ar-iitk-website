export default function InfoCard({ icon, heading, content }) {
  return (
    <div
      style={{
        flex: '1 1 220px',
        minWidth: '220px',
        maxWidth: '280px',
        background: '#f8fafc',
        borderRadius: '1rem',
        boxShadow: '0 8px 24px rgba(31,41,55,0.08)',
        padding: '2rem 1.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #e5e7eb',
        margin: '0.5rem 0',
      }}
    >
      <div
        style={{
          width: '2.8rem',
          height: '2.8rem',
          background: '#00315314',
          borderRadius: '50%',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          color: '#003153',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '1.1rem',
          color: '#003153',
          fontWeight: 700,
          letterSpacing: '0.07em',
          margin: 0,
          textTransform: 'uppercase',
        }}
      >
        {heading}
      </h3>
      {content && (
        <p
          style={{
            fontSize: '1rem',
            color: '#374151',
            marginTop: '0.9rem',
            fontFamily: 'Roboto, sans-serif',
            lineHeight: '1.5',
          }}
        >
          {content}
        </p>
      )}
    </div>
  );
}
