import { useState } from "react";
import { Breadcrumb } from "./layout/Breadcrumb";
import { TopHeader } from "./layout/TopHeader";
import { MainHeader } from "./layout/MainHeader";
import { Footer } from "./layout/Footer";
import { MainNavigation } from "./layout/MainNavigation";
import { CodeOfPractice } from "../pages/quality/CodeOfPractice";
import { Kesqaf } from "../pages/quality/Kesqaf";
import { Kspm } from "../pages/quality/Kspm";
import { QualityReports } from "../pages/metadata/quality-reports/QualityReports";
import { ClassificationNational } from "../pages/metadata/ClassificationNational";
import { ClassificationInternational } from "../pages/metadata/ClassificationInternational";
import { Codelists } from "../pages/metadata/Codelists";
import { Compendium } from "../pages/metadata/Compendium";


export default function Dashboard() {
  const [currentPath, setCurrentPath] = useState("/metadata/quality-reports");
  const [selectedProduct, setSelectedProduct] =
    useState<string>("poverty-inequality");

  // Shrink navigation for quality reports AND dictionary
  const isCompactView =
    currentPath === "/metadata/quality-reports" ||
    currentPath === "/metadata/dictionary" ||
    currentPath === "/quality/kesqaf" ||
    currentPath === "/quality/code-of-practice" ||
    currentPath === "/quality/kspm" ||
    currentPath === "/metadata/compendium";

  const handleNavigate = (path: string) => {
    // Check if path has query parameter for product selection
    if (path.includes("?product=")) {
      const [basePath, query] = path.split("?");
      const params = new URLSearchParams(query);
      const productId = params.get("product");

      setCurrentPath(basePath);
      if (productId) {
        setSelectedProduct(productId);
      }
    } else {
      setCurrentPath(path);
    }
  };

  const renderContent = () => {
    switch (currentPath) {
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
      case "/metadata/codelists":
        return <Codelists />;
      case "/metadata/compendium":
        return <Compendium />;
      default:
        return (
          <QualityReports
            selectedProduct={selectedProduct}
            onProductChange={setSelectedProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <TopHeader />
      <MainHeader />
      <Breadcrumb currentPath={currentPath} onNavigate={handleNavigate} />

      <div className="flex-1 w-full">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Navigation Sidebar */}
            <div
              className={`
                hidden lg:block
                ${isCompactView ? "lg:col-span-2" : "lg:col-span-3"}
              `}
            >
              <MainNavigation
                onNavigate={handleNavigate}
                currentPath={currentPath}
                isCompact={isCompactView}
              />
            </div>

            {/* Content Area */}
            <div
              className={`
                col-span-1
                ${isCompactView ? "lg:col-span-10" : "lg:col-span-9"}
              `}
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
