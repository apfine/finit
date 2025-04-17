import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>
      <div className="event-card">
        <h3>FinTech Summit 2025</h3>
        <p>Date: June 15, 2025</p>
        <p>Location: Mumbai, India</p>
        <p>Join us for a day of insightful talks and networking with industry leaders.</p>
      </div>
    </section>
  );
};

export default Events;
