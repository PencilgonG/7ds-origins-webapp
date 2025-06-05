import { useState } from "react";

const ScalingForm = ({ onUpdate }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    const next = [...entries, { atk: 0, degats: 0 }];
    setEntries(next);
    onUpdate(next);
  };

  const update = (i, field, val) => {
    const updated = entries.map((e, idx) =>
      idx === i ? { ...e, [field]: parseFloat(val) } : e
    );
    setEntries(updated);
    onUpdate(updated);
  };

  return (
    <div className="p-4">
      <button onClick={addEntry} className="mb-2 bg-blue-500 text-white px-3 py-1 rounded">
        + Ajouter une ligne
      </button>
      <table className="table-auto w-full text-white">
        <thead>
          <tr><th>ATK</th><th>Dégâts</th></tr>
        </thead>
        <tbody>
          {entries.map((e, i) => (
            <tr key={i}>
              <td><input className="p-1 w-full text-black" value={e.atk} onChange={(ev) => update(i, "atk", ev.target.value)} /></td>
              <td><input className="p-1 w-full text-black" value={e.degats} onChange={(ev) => update(i, "degats", ev.target.value)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScalingForm;
