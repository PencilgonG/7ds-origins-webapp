import equipements from "../data/equipements.json";
import EquipementCard from "../components/equipements/EquipementCard";

const EquipementsPage = () => (
  <div className="bg-black min-h-screen text-white p-6">
    <h1 className="text-4xl font-bold mb-6">Équipements & Artefacts</h1>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {equipements.map((item, i) => (
        <EquipementCard key={i} item={item} />
      ))}
    </div>
  </div>
);

export default EquipementsPage;
