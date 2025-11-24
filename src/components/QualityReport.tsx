import { useState } from "react";

import { Breadcrumb } from "./layout/Breadcrumb";
import { Sidebar } from "./layout/Sidebar";
import { ReportTitleCard } from "./common/ReportTitleCard";
import { GeneralInfo } from "./sections/GeneralInfo";
import { Relevance } from "./sections/Relevance";
import { MethodologicalSoundness } from "./sections/MethodologicalSoundness";
import { Accuracy } from "./sections/Accuracy";
import { Timeliness } from "./sections/Timeliness";
import { Accessibility } from "./sections/Accessibility";
import { Coherence } from "./sections/Coherence";
import { References } from "./sections/References";
import { CPIContent } from "./products/CPIContent";

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

export default function KNBSQualityReport() {
  const [selectedProductId, setSelectedProductId] =
    useState("poverty-inequality");
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

  const toggleSection = (id: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Breadcrumb />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <Sidebar
            expandedSections={expandedSections}
            onToggle={toggleSection}
          />

          <div className="col-span-9">
            <ReportTitleCard onProductChange={handleProductChange} />

            {selectedProductId === "poverty-inequality" ? (
              <>
                <GeneralInfo
                  isOpen={expandedSections.general}
                  onToggle={toggleSection}
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
            ) : selectedProductId === "cpi" ? (
              <CPIContent
                expandedSections={expandedSections}
                onToggle={toggleSection}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
