'use client';

import React from 'react';
import FooterWithMap from 'components/footer';

export default function SponsorsPage() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* Our Brochure Section */}
      <section
        style={{
          minHeight: '100vh',
          backgroundColor: '#fff',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1f2937',
            fontFamily: 'Orbitron, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Our Brochure
          </h1>
          
          {/* PDF Viewer Container - Fixed Hydration Issue */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '2rem',
            marginBottom: '4rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              border: '2px solid #1f2937'
            }}>
              <iframe
                src="/brochure.pdf"
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none'
                }}
                title="Aerial Robotics Brochure"
              />
            </div>
            
            {/* Download Button */}
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <a
                href="/brochure.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#1f2937',
                  color: 'white',
                  fontWeight: '500',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                  fontFamily: 'Orbitron, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#374151'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#1f2937'}
              >
                <svg 
                  style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Sponsors Section */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '4rem 1.5rem',
          borderTop: '1px solid #e5e7eb'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1f2937',
            fontFamily: 'Orbitron, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Past Sponsors
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Sponsor 1 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e5e7eb',
              position: 'relative',
              zIndex: 1
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '8rem',
                marginBottom: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '0.5rem'
              }}>
                <img
                  src="/sponsors/ansys.png"
                  alt="Ansys Logo"
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  fontFamily: 'Orbitron, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Ansys
                </h3>
              </div>
            </div>

            {/* Sponsor 2 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e5e7eb',
              position: 'relative',
              zIndex: 1
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '8rem',
                marginBottom: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '0.5rem'
              }}>
                <img
                  src="/sponsors/nvidia.jpeg"
                  alt="Nvidia Logo"
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  fontFamily: 'Orbitron, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Nvidia
                </h3>
              </div>
            </div>

            {/* Sponsor 3 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e5e7eb',
              position: 'relative',
              zIndex: 1
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '8rem',
                marginBottom: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '0.5rem'
              }}>
                <img
                  src="/sponsors/tmotor.jpeg"
                  alt="T-Motor Logo"
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  fontFamily: 'Orbitron, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  T-Motor
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          backgroundColor: '#1f2937',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            fontFamily: 'Orbitron, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Interested in Sponsoring Us?
          </h3>
          <p style={{
            color: '#d1d5db',
            fontSize: '1.125rem',
            marginBottom: '2rem',
            lineHeight: '1.6',
            fontFamily: 'Orbitron, sans-serif'
          }}>
            Join our mission to advance aerial robotics technology and innovation.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '1rem 2rem',
              backgroundColor: 'white',
              color: '#1f2937',
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              fontFamily: 'Orbitron, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            Get in Touch
            <svg 
              style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <FooterWithMap />
    </main>
  );
}
