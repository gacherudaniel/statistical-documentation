import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb } from "./layout/Breadcrumb";
import { TopHeader } from "./layout/TopHeader";
import { MainHeader } from "./layout/MainHeader";
import { Footer } from "./layout/Footer";
import { MainNavigation } from "./layout/MainNavigation";
import { Homepage } from "./Home";
import { CodeOfPractice } from "../pages/quality/CodeOfPractice";
import { Kesqaf } from "../pages/quality/Kesqaf";
import { Kspm } from "../pages/quality/Kspm";
import { QualityReports } from "../pages/metadata/quality-reports/QualityReports";
import { ClassificationNational } from "../pages/metadata/ClassificationNational";
import { ClassificationInternational } from "../pages/metadata/ClassificationInternational";
import { Compendium } from "../pages/metadata/Compendium";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] =
    useState<string>("poverty-inequality");

  // Use location.pathname directly instead of state to avoid cascading renders
  const currentPath = location.pathname;

  const handleNavigate = (path: string) => {
    // Check if path has query parameter for product selection
    if (path.includes("?product=")) {
      const [basePath, query] = path.split("?");
      const params = new URLSearchParams(query);
      const productId = params.get("product");

      navigate(basePath + "?" + query);
      if (productId) {
        setSelectedProduct(productId);
      }
    } else {
      navigate(path);
    }
  };

  const renderContent = () => {
    switch (currentPath) {
      case "/":
      case "/home":
        return <Homepage />;
      case "/quality/code-of-practice":
        return <CodeOfPractice />;
      case "/quality/kesqaf":
        return <Kesqaf />;
      case "/quality/kspm":
        return <Kspm />;
      case "/metadata/quality-reports":
        return (
          <QualityReports
            selectedProduct={selectedProduct}
            onProductChange={setSelectedProduct}
          />
        );
      case "/metadata/classification/international":
        return <ClassificationInternational />;
      case "/metadata/classification/national":
        return <ClassificationNational />;
      case "/metadata/compendium":
        return <Compendium />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <TopHeader />
      <MainHeader />
      <MainNavigation onNavigate={handleNavigate} currentPath={currentPath} />
      <Breadcrumb currentPath={currentPath} onNavigate={handleNavigate} />

      <div className="flex-1 w-full">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-6">
          {/* Content Area - Full Width */}
          <div className="w-full">{renderContent()}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
