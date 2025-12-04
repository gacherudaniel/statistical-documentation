import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, type ComponentType } from "react";
import Dashboard from "./components/Dashboard";
import LoadingFallback from "./components/LoadingFallback";

// Lazy components
const Home = lazy(() =>
  import("./components/Home").then((module) => ({
    default: module.Home,
  }) as { default: ComponentType<any> })
);

// Quality pages
const Kesqaf = lazy(() =>
  import("./pages/quality/Kesqaf").then((m) => ({ default: m.Kesqaf }))
);

const Kspm = lazy(() =>
  import("./pages/quality/Kspm").then((m) => ({ default: m.Kspm }))
);

// Metadata pages
const QualityReports = lazy(() =>
  import("./pages/metadata/quality-reports/QualityReports").then((m) => ({ default: m.QualityReports }))
);

const Codelists = lazy(() =>
  import("./pages/metadata/Codelists").then((m) => ({ default: m.Codelists }))
);

const Classifications = lazy(() =>
  import("./pages/metadata/ClassificationNational").then((m) => ({ default: m.ClassificationNational }))
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Dashboard */}
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* Quality */}
          <Route path="/quality/Kesqaf" element={<Kesqaf />} />
          <Route path="/quality/Kspm" element={<Kspm />} />

          {/* Metadata */}
          <Route path="/metadata/quality-reports" element={<QualityReports />} />
          <Route path="/metadata/codelists" element={<Codelists />} />
          <Route path="/metadata/classification/national" element={<Classifications />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
