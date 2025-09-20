"use client";
import { useState } from "react";

export default function Home() {
  const [currentGame, setCurrentGame] = useState({
    title: "Demo Game",
    url: "https://example.com/game",
    description: "Ye ek demo game hai jo iframe me load ho raha hai.",
  });

  const games = [
    {
      title: "Car Racing",
      url: "https://example.com/car-game",
      thumbnail: "https://via.placeholder.com/200x100?text=Car+Racing",
      description: "Fast car racing game with multiple tracks.",
    },
    {
      title: "Space Shooter",
      url: "https://example.com/space-game",
      thumbnail: "https://via.placeholder.com/200x100?text=Space+Shooter",
      description: "Shoot aliens and save the galaxy.",
    },
    {
      title: "Puzzle Mania",
      url: "https://example.com/puzzle-game",
      thumbnail: "https://via.placeholder.com/200x100?text=Puzzle+Mania",
      description: "Solve fun puzzles and unlock levels.",
    },
  ];

  return (
    <main>
      <section className="game-container">
        <h2>{currentGame.title}</h2>
        <iframe src={currentGame.url} title={currentGame.title}></iframe>
        <div className="game-details">
          <h3>About {currentGame.title}</h3>
          <p>{currentGame.description}</p>
        </div>
      </section>

      <section className="more-games">
        <h2>More Games</h2>
        <div className="grid">
          {games.map((game, i) => (
            <div
              key={i}
              className="game-card"
              onClick={() => setCurrentGame(game)}
            >
              <img src={game.thumbnail} alt={game.title} />
              <p>{game.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
