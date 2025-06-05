const EquipementCard = ({ item }) => (
  <div className="bg-gray-700 text-white p-4 rounded shadow-md hover:scale-105 transition-transform">
    <h2 className="text-xl font-bold">{item.name}</h2>
    <p className="text-sm text-gray-300">Rare: {item.rarity}</p>
    <p className="text-sm text-gray-400">Bonus: {item.bonus}</p>
  </div>
);

export default EquipementCard;
