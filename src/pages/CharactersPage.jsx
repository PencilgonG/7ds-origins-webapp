import React from "react";
import CharacterCard from "../components/personnages/CharacterCard";
import characters from "../data/characters.json"; // Assure-toi que ce fichier existe et est correctement rempli

const CharactersPage = () => (
  <div className="bg-black text-white min-h-screen p-6">
    <h1 className="text-4xl font-bold mb-6">Personnages Jouables</h1>
    {characters.length === 0 ? (
      <p>Module en cours de développement</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map((char, i) => (
          <CharacterCard key={i} character={char} />
        ))}
      </div>
    )}
  </div>
);

export default CharactersPage;
