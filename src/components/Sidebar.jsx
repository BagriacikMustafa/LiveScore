// src/components/SidebarContent.jsx
import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const SidebarContent = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch competitions data
  useEffect(() => {
    fetch('http://localhost:3001/api/livescores') // Update this URL with your actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('API isteği başarısız oldu');
        }
        return response.json();
      })
      .then((data) => {
        setCompetitions(Object.values(data.data.competitions)); // Store competition data
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div className="sidebar-content">
      {/* Popüler Futbol Ligleri */}
      <div className="popular-leagues">
        <h3>Popüler Futbol Ligleri</h3>
        <hr />
        {competitions.map((competition) => (
          <a href={`#${competition.competitionSlug}`} key={competition.id}>
            {competition.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarContent;
