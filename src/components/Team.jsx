import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Ananya Sharma',
    role: 'President',
    quote: '“Leadership is not about being in charge. It’s about taking care of those in your charge.”',
  },
  {
    name: 'Rahul Verma',
    role: 'Vice President',
    quote: '“Vision without action is merely a dream. Action without vision just passes the time.”',
  },
  {
    name: 'Ishita Nair',
    role: 'Secretary',
    quote: '“Details matter. It’s worth waiting to get it right.”',
  },
  {
    name: 'Aman Mehta',
    role: 'Treasurer',
    quote: '“Budgeting is not just for saving money, it’s for gaining control.”',
  },
  {
    name: 'Sneha Reddy',
    role: 'Design Lead',
    quote: '“Design is intelligence made visible.”',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet the Core Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <blockquote className="quote">“{member.quote}”</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
