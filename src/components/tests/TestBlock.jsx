const TestBlock = ({ test }) => (
  <div className="bg-gray-900 text-white p-4 rounded shadow-md hover:scale-[1.01] transition-transform">
    <h3 className="text-lg font-bold">{test.title}</h3>
    <p className="text-sm text-gray-300">{test.description}</p>
    <p className="text-sm text-gray-400">Résultat : {test.result}</p>
  </div>
);

export default TestBlock;
