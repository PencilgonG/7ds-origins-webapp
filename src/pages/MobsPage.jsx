import mobs from "../data/mobs.json";
import MobCard from "../components/mobs/MobCard";

const MobsPage = () => (
  <div className="bg-black min-h-screen text-white p-6">
    <h1 className="text-4xl font-bold mb-6">Boss & Mobs</h1>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {mobs.map((mob, i) => (
        <MobCard key={i} mob={mob} />
      ))}
    </div>
  </div>
);

export default MobsPage;
