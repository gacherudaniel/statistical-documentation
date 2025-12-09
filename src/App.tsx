import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Dashboard from "./components/Dashboard";
import LoadingFallback from "./components/LoadingFallback.tsx";

// Lazy components
const Home = lazy(() =>
  import("./components/Home").then((module) => ({
    default: module.Homepage,
  }))
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* All dashboard routes - pages with full layout */}
          <Route path="/quality/*" element={<Dashboard />} />
          <Route path="/metadata/*" element={<Dashboard />} />

          {/* Legacy dashboard route for compatibility */}
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
