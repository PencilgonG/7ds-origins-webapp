import { useState } from "react";

const SimForm = ({ onCalculate }) => {
  const [atk, setAtk] = useState(1500);
  const [crit, setCrit] = useState(0.25);
  const [mult, setMult] = useState(2.0);
  const [def, setDef] = useState(800);

  const handleCalc = () => {
    const degats = Math.max(0, (atk * mult * (1 + crit)) - def);
    onCalculate(degats);
  };

  return (
    <div className="bg-gray-800 p-4 rounded text-white">
      <h2 className="font-bold text-lg mb-2">Simulation</h2>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <label>ATK : <input className="w-full text-black" type="number" value={atk} onChange={e => setAtk(+e.target.value)} /></label>
        <label>Crit : <input className="w-full text-black" type="number" value={crit} onChange={e => setCrit(+e.target.value)} /></label>
        <label>Mult. : <input className="w-full text-black" type="number" value={mult} onChange={e => setMult(+e.target.value)} /></label>
        <label>DEF ennemi : <input className="w-full text-black" type="number" value={def} onChange={e => setDef(+e.target.value)} /></label>
      </div>
      <button onClick={handleCalc} className="bg-green-600 px-3 py-1 rounded">Calculer</button>
    </div>
  );
};

export default SimForm;
