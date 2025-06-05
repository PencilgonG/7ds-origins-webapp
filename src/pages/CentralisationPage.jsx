import data from "../data/centralisation.json";
import CentralTable from "../components/centralisation/CentralTable";

const CentralisationPage = () => (
  <div className="bg-black min-h-screen text-white p-6">
    <h1 className="text-4xl font-bold mb-6">Centralisation de Données</h1>
    <CentralTable data={data} />
  </div>
);

export default CentralisationPage;
