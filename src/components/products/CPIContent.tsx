// src/components/products/CPIContent.tsx
import type { SectionKey } from "../QualityReport";
import { GeneralInfo } from "./sections/CPIGeneralInfo";
import { Relevance } from "./sections/CPIRelevance";
import { MethodologicalSoundness } from "./sections/CPIMethodologicalSoundness";
import { Accuracy } from "./sections/CPIAccuracy";
import { Timeliness } from "./sections/CPITimeliness";
import { Accessibility } from "./sections/CPIAccessibility";
import { Coherence } from "./sections/CPICoherence";
import { References } from "./sections/CPIReferences";

interface CPIContentProps {
  expandedSections: Record<SectionKey, boolean>;
  onToggle: (id: SectionKey) => void;
}

export function CPIContent({ expandedSections, onToggle }: CPIContentProps) {
  return (
    <>
      <GeneralInfo isOpen={expandedSections.general} onToggle={onToggle} />
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
