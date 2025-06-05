const CharacterCard = ({ character }) => (
  <div className="bg-gray-800 text-white p-4 rounded shadow-md hover:scale-105 transition-transform">
    <h2 className="text-xl font-bold">{character.name}</h2>
    <p className="text-sm text-gray-300">Type: {character.type}</p>
    <p className="text-sm text-gray-400">Rôle: {character.role}</p>
  </div>
);

export default CharacterCard;
