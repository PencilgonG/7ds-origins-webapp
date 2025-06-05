import { useState } from "react";
import data from "../data/scalings.json";
import ScalingForm from "../components/scaling/ScalingForm";
import { Line } from "react-chartjs-2";

const ScalingPage = () => {
  const [points, setPoints] = useState(data);

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Analyse de Scaling</h1>
      <ScalingForm onUpdate={setPoints} />
      <Line
        data={{
          labels: points.map((p) => p.atk),
          datasets: [
            {
              label: "Dégâts",
              data: points.map((p) => p.degats),
              backgroundColor: "#4ade80",
              borderColor: "#4ade80",
              tension: 0.3,
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            x: { title: { display: true, text: "ATK" } },
            y: { title: { display: true, text: "Dégâts" } },
          },
        }}
      />
    </div>
  );
};

export default ScalingPage;
