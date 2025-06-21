'use client';

import React, { useState } from 'react';
import FooterWithMap from 'components/footer';

export default function TeamPage() {
  const [activeSection, setActiveSection] = useState('current');

  const currentTeam = [
    {
      id: 1,
      name: "Ram Daftari",
      designation: "Team Lead",
      image: "/team/current/ram-daftari.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Senior Team Member",
      image: "/team/current/jane-smith.jpg"
    },
    {
      id: 3,
      name: "Mike Johnson",
      designation: "Junior Team Member",
      image: "/team/current/mike-johnson.jpg"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      designation: "Hardware Lead",
      image: "/team/current/sarah-wilson.jpg"
    },
    {
      id: 5,
      name: "David Brown",
      designation: "Software Lead",
      image: "/team/current/david-brown.jpg"
    },
    {
      id: 6,
      name: "Emily Davis",
      designation: "Research Lead",
      image: "/team/current/emily-davis.jpg"
    },
    // Add more current team members here...
  ];

  const alumni = [
    {
      id: 1,
      name: "Michael Chen",
      year: "2023",
      image: "/team/alumni/michael-chen.jpg"
    },
    {
      id: 2,
      name: "Lisa Rodriguez",
      year: "2022",
      image: "/team/alumni/lisa-rodriguez.jpg"
    },
    {
      id: 3,
      name: "James Thompson",
      year: "2021",
      image: "/team/alumni/james-thompson.jpg"
    },
    {
      id: 4,
      name: "Anna Martinez",
      year: "2020",
      image: "/team/alumni/anna-martinez.jpg"
    },
    // Add more alumni here...
  ];

  const currentTeamData = activeSection === 'current' ? currentTeam : alumni;

  const TeamCard = ({ member, isAlumni = false }) => (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        border: '1px solid #e5e7eb',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center'
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
      {/* Circular Profile Photo */}
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 1rem',
        backgroundColor: '#f8fafc',
        border: '3px solid #1f2937'
      }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onError={(e) => {
            e.target.src = '/team/placeholder-avatar.jpg';
          }}
        />
      </div>

      {/* Member Name */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 0.5rem 0', // Added bottom margin for designation
        fontFamily: 'Orbitron, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {member.name}
      </h3>

      {/* Designation/Year Subheading */}
      <p style={{
        fontSize: '0.875rem', // Adjusted font size for maximum length 'Junior Team Member'
        fontWeight: '500',
        color: '#3b82f6',
        margin: '0',
        fontFamily: 'Orbitron, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.03em'
      }}>
        {isAlumni ? `Class of ${member.year}` : member.designation}
      </p>
    </div>
  );

  return (
    <main style={{ margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          textAlign: 'center',
          padding: '6rem 1.5rem 2rem'
        }}
      >
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '0',
          fontFamily: 'Orbitron, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          Meet The Team
        </h1>
      </section>

      {/* Team Section with Toggle Only */}
      <section style={{
        backgroundColor: '#fff',
        padding: '1rem 1.5rem 2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          {/* Toggle Buttons Only */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#f8fafc',
            borderRadius: '0.5rem',
            padding: '0.25rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            marginBottom: '3rem'
          }}>
            {['current', 'alumni'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  padding: '0.75rem 2rem',
                  borderRadius: '0.25rem',
                  border: 'none',
                  backgroundColor: activeSection === section ? '#1f2937' : 'transparent',
                  color: activeSection === section ? 'white' : '#6b7280',
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  if (activeSection !== section) {
                    e.target.style.backgroundColor = '#e5e7eb';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== section) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {section === 'current' ? 'Current Team' : 'Alumni'}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {currentTeamData.map((member) => (
              <TeamCard 
                key={member.id} 
                member={member} 
                isAlumni={activeSection === 'alumni'}
              />
            ))}
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
            Want to Join Our Team?
          </h3>
          <p style={{
            color: '#d1d5db',
            fontSize: '1.125rem',
            marginBottom: '2rem',
            lineHeight: '1.6',
            fontFamily: 'Orbitron, sans-serif'
          }}>
            Be part of the next generation of aerial robotics innovators.
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
