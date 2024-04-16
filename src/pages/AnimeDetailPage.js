// src/pages/AnimeDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './AnimeDetailPage.css'; // Importe o arquivo CSS

function AnimeDetailPage() {
  const [anime, setAnime] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchAnimeDetails() {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data || null);
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    }

    fetchAnimeDetails();
  }, [id]);

  return (
    <div className="container">
      <h1 className="title">Anime Details</h1>
      {anime ? (
        <div className="anime-details">
          <img src={anime.data.images.jpg.image_url} alt={anime.data.title} />
          <div className="anime-info">
            <p className="synopsis">{anime.data.synopsis}</p>
            <p>Episodes: {anime.data.episodes}</p>
            <p>Type: {anime.data.type}</p> {/* Mostrar o tipo de conteúdo */}
            <p>Year: {anime.data.year}</p>
          </div>
          <div className="score-box">
            <p className="score">Score: {anime.data.score}</p>
          </div>
        </div>
      ) : (
        <p>Loading anime details...</p>
      )}
    </div>
  );
}

export default AnimeDetailPage;
