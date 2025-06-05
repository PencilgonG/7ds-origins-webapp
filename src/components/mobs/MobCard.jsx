const MobCard = ({ mob }) => (
  <div className="bg-red-900 text-white p-4 rounded shadow-md hover:scale-105 transition-transform">
    <h2 className="text-xl font-bold">{mob.name}</h2>
    <p className="text-sm text-gray-300">Niveau : {mob.level}</p>
    <p className="text-sm text-gray-400">Zone : {mob.zone}</p>
  </div>
);

export default MobCard;
