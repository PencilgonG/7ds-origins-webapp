import tests from "../data/tests.json";
import TestBlock from "../components/tests/TestBlock";

const TestsEmpiriquesPage = () => (
  <div className="bg-black min-h-screen text-white p-6">
    <h1 className="text-4xl font-bold mb-6">Tests Empiriques</h1>
    <div className="space-y-4">
      {tests.map((test, i) => (
        <TestBlock key={i} test={test} />
      ))}
    </div>
  </div>
);

export default TestsEmpiriquesPage;
