import { BrowserRouter, Routes, Route } from "react-router-dom";
import QualityReport from "./components/QualityReport";
import { Homepage } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard/metadata/quality-reports" element={<QualityReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
