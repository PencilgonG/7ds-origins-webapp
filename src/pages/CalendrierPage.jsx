import characters from "../data/characters.json";
import CharacterCard from "../components/personnages/CharacterCard";

const CharactersPage = () => (
  <div className="bg-black min-h-screen text-white p-6">
    <h1 className="text-4xl font-bold mb-6">Personnages Jouables</h1>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {characters.map((char, i) => (
        <CharacterCard key={i} character={char} />
      ))}
    </div>
  </div>
);

export default CharactersPage;
