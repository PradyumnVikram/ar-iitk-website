import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterWithMap = () => {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: '192px',
              height: '192px',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <Image
                src="/logo2.jpeg"
                alt="Aerial Robotics Logo"
                width={140}
                height={140}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ flex: 1, paddingLeft: '2rem', paddingRight: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>CONTACT US</h3>
            <div style={{ color: '#d1d5db', marginBottom: '2rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0.5rem 0', fontWeight: '500' }}>Hall of Residence II</p>
              <p style={{ margin: '0.5rem 0' }}>IIT Kanpur</p>
              <p style={{ margin: '0.5rem 0' }}>Uttar Pradesh - 208016</p>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://instagram.com/ariitk" target="_blank" rel="noopener noreferrer" style={{ color: '#ec4899', fontSize: '1.75rem' }}>
                <FaInstagram />
              </a>
              <a href="https://youtube.com/@ariitk" target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626', fontSize: '1.75rem' }}>
                <FaYoutube />
              </a>
              <a href="https://github.com/ariitk" target="_blank" rel="noopener noreferrer" style={{ color: '#d1d5db', fontSize: '1.75rem' }}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/company/ariitk" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontSize: '1.75rem' }}>
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Map */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: '192px',
              height: '192px',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '2px solid #4b5563'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.2940511391307!2d80.22708207606357!3d26.510665777251575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36ffac6f195f%3A0x21cbfa3e6d7fb5e9!2sHall%20of%20Residence%20II%2C%20Sixth%20Ave%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016!5e0!3m2!1sen!2sin!4v1749559626618!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid #374151', 
          marginTop: '3rem', 
          paddingTop: '2rem', 
          textAlign: 'center', 
          color: '#9ca3af' 
        }}>
          <p>© Copyright <strong>ARIITK</strong>. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithMap;
