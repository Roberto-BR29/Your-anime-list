// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';

function HomePage() {
  const [animeList, setAnimeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function fetchAnime() {
    try {
      let url = 'https://api.jikan.moe/v4/anime';
      if (searchTerm) {
        url += `?q=${searchTerm}`;
      }
      const response = await axios.get(url);
      console.log(response.data.data);
      setAnimeList(response.data.data || []);
    } catch (error) {
      console.log('Error fetching anime list:', error);
    }
  }

  useEffect(() => {
    fetchAnime();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">My Anime List</h1>
      <input
        type="text"
        placeholder="Search anime..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="anime-list">
        {animeList.map((anime) => (
          <div key={anime.mal_id} className="anime-item">
            <a href={`/anime/${anime.mal_id}`}>
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <p>{anime.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
