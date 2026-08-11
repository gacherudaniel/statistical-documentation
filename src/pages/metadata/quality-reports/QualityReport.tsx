import { useState, useEffect } from "react";
import { Sidebar } from "../../../components/layout/Sidebar";
import { Menu, X } from "lucide-react";
// import { ReportTitleCard } from "./common/ReportTitleCard";
import { GeneralInfo } from "./poverty-inequality/GeneralInfo";
import { Relevance } from "./poverty-inequality/Relevance";
import { MethodologicalSoundness } from "./poverty-inequality/MethodologicalSoundness";
import { Accuracy } from "./poverty-inequality/Accuracy";
import { Timeliness } from "./poverty-inequality/Timeliness";
import { Accessibility } from "./poverty-inequality/Accessibility";
import { Coherence } from "./poverty-inequality/Coherence";
import { References } from "./poverty-inequality/References";
import { CPIContent } from "../../../components/products/CPIContent";
import { PRODUCTS } from "./products";

export type SectionKey =
  | "general"
  | "quality"
  | "relevance"
  | "methodology"
  | "accuracy"
  | "timeliness"
  | "accessibility"
  | "coherence"
  | "references";

interface QualityReportProps {
  initialProductId?: string;
  onProductChange?: (productId: string) => void;
}

export default function QualityReport({
  initialProductId = "poverty-inequality",
}: // onProductChange,
QualityReportProps) {
  const [selectedProduct, setSelectedProduct] = useState(initialProductId);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    general: true,
    quality: true,
    relevance: false,
    methodology: false,
    accuracy: false,
    timeliness: false,
    accessibility: false,
    coherence: false,
    references: false,
  });

  // Get the current product data
  const currentProduct = PRODUCTS.find(
    (product) => product.id === selectedProduct
  );

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when navigating on mobile
  const toggleSection = (id: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    
    // Close sidebar on mobile after navigation
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && sidebarOpen) {
        const target = event.target as Element;
        const sidebar = document.querySelector('.report-sidebar');
        const toggleButton = document.querySelector('.sidebar-toggle');
        
        if (sidebar && !sidebar.contains(target) && !toggleButton?.contains(target)) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, sidebarOpen]);

  // const handleProductChange = (productId: string) => {
  //   setSelectedProduct(productId);
  //   // Notify parent component about the change
  //   if (onProductChange) {
  //     onProductChange(productId);
  //   }
  // };

  // Update when initialProductId changes (from navigation)
  useEffect(() => {
    setSelectedProduct(initialProductId);
  }, [initialProductId]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto px-4 lg:px-6 py-4 lg:py-8">
        {/* Mobile sidebar toggle */}
        {isMobile && (
          <div className="flex items-center justify-between mb-4 bg-white rounded-lg shadow-sm border p-4">
            <h2 className="text-lg font-semibold text-knbs-700">
              {currentProduct?.name || 'Quality Report'}
            </h2>
            <button
              onClick={toggleSidebar}
              className="sidebar-toggle p-2 text-knbs-700 hover:bg-knbs-50 rounded-lg transition-colors"
              aria-label={sidebarOpen ? "Close contents menu" : "Open contents menu"}
              aria-expanded={sidebarOpen}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        )}

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Sidebar - Mobile Overlay / Desktop Column */}
          <div className={`${
            isMobile 
              ? `fixed inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 ease-in-out ${
                  sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`
              : 'lg:col-span-3 xl:col-span-2'
          }`}>
            {/* Mobile backdrop */}
            {isMobile && sidebarOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            
            <div className={`report-sidebar h-full ${
              isMobile ? 'relative z-50' : ''
            }`}>
              <Sidebar
                expandedSections={expandedSections}
                onToggle={toggleSection}
                isMobile={isMobile}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 xl:col-span-10">
            {/* <ReportTitleCard
              onProductChange={handleProductChange}
              selectedProductId={selectedProduct}
            /> */}

            {selectedProduct === "poverty-inequality" ? (
              <>
                <GeneralInfo
                  isOpen={expandedSections.general}
                  onToggle={toggleSection}
                  selectedProduct={currentProduct}
                />
                <Relevance
                  isOpen={expandedSections.relevance}
                  onToggle={toggleSection}
                />
                <MethodologicalSoundness
                  isOpen={expandedSections.methodology}
                  onToggle={toggleSection}
                />
                <Accuracy
                  isOpen={expandedSections.accuracy}
                  onToggle={toggleSection}
                />
                <Timeliness
                  isOpen={expandedSections.timeliness}
                  onToggle={toggleSection}
                />
                <Accessibility
                  isOpen={expandedSections.accessibility}
                  onToggle={toggleSection}
                />
                <Coherence
                  isOpen={expandedSections.coherence}
                  onToggle={toggleSection}
                />
                <References
                  isOpen={expandedSections.references}
                  onToggle={toggleSection}
                />
              </>
            ) : selectedProduct === "cpi" ? (
              <CPIContent
                expandedSections={expandedSections}
                onToggle={toggleSection}
                selectedProduct={currentProduct}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
