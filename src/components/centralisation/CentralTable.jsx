const CentralTable = ({ data }) => (
  <div className="p-4 text-white">
    <h2 className="text-xl font-bold mb-4">Synthèse des Données</h2>
    <table className="table-auto w-full text-sm">
      <thead>
        <tr>
          <th>Perso</th><th>Compétence</th><th>Stat</th><th>Test</th><th>Sim</th><th>Scaling</th><th>Fiabilité</th><th>Anomalie</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i} className={d.anomalie ? "bg-red-900" : "bg-gray-800"}>
            <td>{d.perso}</td>
            <td>{d.skill}</td>
            <td>{d.stat}</td>
            <td>{d.valeurs.test}</td>
            <td>{d.valeurs.simulation}</td>
            <td>{d.valeurs.scaling}</td>
            <td className="text-green-400">{d.fiabilite}%</td>
            <td>{d.anomalie ? "⚠️" : "✔"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CentralTable;
