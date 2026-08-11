// src/components/products/CPIContent.tsx
import type { SectionKey } from "../../pages/metadata/quality-reports/QualityReport";
import type { Product } from "../../pages/metadata/quality-reports/products";
import { GeneralInfo } from "../../pages/metadata/quality-reports/cpi/CPIGeneralInfo";
import { Relevance } from "../../pages/metadata/quality-reports/cpi/CPIRelevance";
import { MethodologicalSoundness } from "../../pages/metadata/quality-reports/cpi/CPIMethodologicalSoundness";
import { Accuracy } from "../../pages/metadata/quality-reports/cpi/CPIAccuracy";
import { Timeliness } from "../../pages/metadata/quality-reports/cpi/CPITimeliness";
import { Accessibility } from "../../pages/metadata/quality-reports/cpi/CPIAccessibility";
import { Coherence } from "../../pages/metadata/quality-reports/cpi/CPICoherence";
import { References } from "../../pages/metadata/quality-reports/cpi/CPIReferences";

interface CPIContentProps {
  expandedSections: Record<SectionKey, boolean>;
  onToggle: (id: SectionKey) => void;
  selectedProduct?: Product;
}

export function CPIContent({
  expandedSections,
  onToggle,
  selectedProduct,
}: CPIContentProps) {
  return (
    <>
      <GeneralInfo
        isOpen={expandedSections.general}
        onToggle={onToggle}
        selectedProduct={selectedProduct}
      />
      <Relevance isOpen={expandedSections.relevance} onToggle={onToggle} />
      <MethodologicalSoundness
        isOpen={expandedSections.methodology}
        onToggle={onToggle}
      />
      <Accuracy isOpen={expandedSections.accuracy} onToggle={onToggle} />
      <Timeliness isOpen={expandedSections.timeliness} onToggle={onToggle} />
      <Accessibility
        isOpen={expandedSections.accessibility}
        onToggle={onToggle}
      />
      <Coherence isOpen={expandedSections.coherence} onToggle={onToggle} />
      <References isOpen={expandedSections.references} onToggle={onToggle} />
    </>
  );
}
