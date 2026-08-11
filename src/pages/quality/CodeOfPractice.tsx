import { useState } from "react";
import {
  BookOpen,
  ChevronRight,
  FileText,
  Menu,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { IntroSection } from "./code-of-practice/IntroSection";
import { PillarOneSection } from "./code-of-practice/PillarOneSection";
import { PillarTwoSection } from "./code-of-practice/PillarTwoSection";
import { PillarThreeSection } from "./code-of-practice/PillarThreeSection";
import { ReferencesSection } from "./code-of-practice/ReferencesSection";
import { AnnexSection } from "./code-of-practice/AnnexSection";

export function CodeOfPractice() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: "intro", title: "Introduction", icon: FileText },
    { id: "pillar-one", title: "Pillar 1: Quality", icon: ShieldCheck },
    { id: "pillar-two", title: "Pillar 2: Trustworthiness", icon: Users },
    { id: "pillar-three", title: "Pillar 3: Progressiveness", icon: Zap },
    { id: "references", title: "References", icon: BookOpen },
    {
      id: "annex",
      title: "Annex: Indicators/Measures of Success",
      icon: BookOpen,
    },
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsSidebarOpen(false); // Close mobile menu when section is selected
  };

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />;
      case "pillar-one":
        return <PillarOneSection />;
      case "pillar-two":
        return <PillarTwoSection />;
      case "pillar-three":
        return <PillarThreeSection />;
      case "references":
        return <ReferencesSection />;
      case "annex":
        return <AnnexSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="relative">
      {/* Mobile Hamburger Menu Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-knbs-600 text-white rounded-lg shadow-sm hover:bg-knbs-700 transition-colors"
        >
          <Menu size={20} />
          <span className="font-medium">Navigation</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-4">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden lg:block lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-3 sticky top-4">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b">
              <BookOpen className="text-knbs-600" size={20} />
              <div>
                <h3 className="font-bold text-knbs-600 text-xs">KeSCoP</h3>
                <p className="text-[10px] text-gray-600">Code of Practice</p>
              </div>
            </div>

            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full text-left px-2 py-1.5 rounded transition-colors flex items-center gap-2 text-[11px] ${
                      activeSection === section.id
                        ? "bg-knbs-500 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Icon size={12} className="flex-shrink-0" />
                    <span className="flex-1 leading-tight">{section.title}</span>
                    <ChevronRight size={10} className="flex-shrink-0" />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsSidebarOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform">
              <div className="p-4">
                {/* Header with close button */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-knbs-600" size={20} />
                    <div>
                      <h3 className="font-bold text-knbs-600 text-sm">KeSCoP</h3>
                      <p className="text-xs text-gray-600">Code of Practice</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSectionClick(section.id)}
                        className={`w-full text-left px-3 py-3 rounded-lg transition-colors flex items-center gap-3 text-sm ${
                          activeSection === section.id
                            ? "bg-knbs-500 text-white"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <Icon size={16} className="flex-shrink-0" />
                        <span className="flex-1">{section.title}</span>
                        <ChevronRight size={14} className="flex-shrink-0" />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="lg:col-span-10">
          <div className="bg-white rounded-lg shadow-sm border">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
