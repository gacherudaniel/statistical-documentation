import type { SectionKey } from "../../pages/metadata/quality-reports/QualityReport";
import { X } from "lucide-react";

interface SidebarProps {
  expandedSections: Record<SectionKey, boolean>;
  onToggle: (id: SectionKey) => void;
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const NAV_ITEMS: Array<{ id: SectionKey; label: string }> = [
  { id: "general", label: "A. General Information" },
  { id: "quality", label: "B. Quality Declaration" },
  { id: "relevance", label: "B.1 Relevance" },
  { id: "methodology", label: "B.2 Methodological Soundness" },
  { id: "accuracy", label: "B.3 Accuracy & Reliability" },
  { id: "timeliness", label: "B.4 Timeliness & Punctuality" },
  { id: "accessibility", label: "B.5 Accessibility & Clarity" },
  { id: "coherence", label: "B.6 Coherence & Comparability" },
  { id: "references", label: "References" },
];

export function Sidebar({ 
  expandedSections, 
  onToggle, 
  isMobile = false, 
  onClose 
}: SidebarProps) {
  const handleNavClick = (id: SectionKey) => {
    // Toggle the section open
    onToggle(id);

    // Scroll to the section after a brief delay to allow the section to expand
    setTimeout(() => {
      const element = document.getElementById(`section-${id}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className={`${
      isMobile 
        ? 'h-full' 
        : 'lg:col-span-3 xl:col-span-2'
    }`}>
      <div className={`bg-white rounded-lg shadow-sm border overflow-hidden ${
        isMobile 
          ? 'h-full flex flex-col' 
          : 'sticky top-4'
      }`}>
        <div className="bg-knbs-500 text-white px-4 py-3 flex items-center justify-between">
          <h3 className="font-medium text-sm">Contents</h3>
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="text-white hover:bg-knbs-600 p-1 rounded transition-colors"
              aria-label="Close contents menu"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <nav className={`p-3 ${
          isMobile ? 'flex-1 overflow-y-auto' : ''
        }`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 ${
                isMobile ? 'text-sm' : 'text-xs'
              } rounded hover:bg-knbs-50 transition-colors mb-1 ${
                expandedSections[item.id]
                  ? "bg-knbs-50 text-knbs-800 font-medium"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
