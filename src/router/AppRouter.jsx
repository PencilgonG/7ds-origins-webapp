import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersPage from "../pages/CharactersPage";
import MobsPage from "../pages/MobsPage";
import EquipementsPage from "../pages/EquipementsPage";
import TestsEmpiriquesPage from "../pages/TestsEmpiriquesPage";
import ScalingPage from "../pages/ScalingPage";
import SimulateurPage from "../pages/SimulateurPage";
import CentralisationPage from "../pages/CentralisationPage";
import CalendrierPage from "../pages/CalendrierPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/mobs" element={<MobsPage />} />
      <Route path="/equipements" element={<EquipementsPage />} />
      <Route path="/tests" element={<TestsEmpiriquesPage />} />
      <Route path="/scaling" element={<ScalingPage />} />
      <Route path="/simulateur" element={<SimulateurPage />} />
      <Route path="/centralisation" element={<CentralisationPage />} />
      <Route path="/calendrier" element={<CalendrierPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
