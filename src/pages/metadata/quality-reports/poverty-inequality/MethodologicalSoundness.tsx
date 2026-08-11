import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";

interface SectionProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function MethodologicalSoundness({ isOpen, onToggle }: SectionProps) {
  return (
    <div
      id="section-methodology"
      className="bg-white rounded-lg shadow-sm border mb-8 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="methodology"
        number="B.2"
        title="Methodological Soundness"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div className="p-6 space-y-4">
          <p className="mb-4 leading-relaxed italic text-gray-700">
            Methodological Soundness is the extent to which the methodology used
            to compile statistics complies with the relevant international
            standards or guidelines.
          </p>

          <p className="mb-4 leading-relaxed text-gray-700">
            To ensure the statistics produced are methodologically sound, the
            Bureau uses various guidelines produced by the World Bank group. The
            statistics were compiled using guidelines for constructing
            consumption aggregates for welfare analysis (Deaton & Zaidi, 2002){" "}
            <a
              href="https://openknowledge.worldbank.org/entities/publication/05705853-f9bc-5bbb-9658-c254a2eae048"
              target="_blank"
              rel="noopener noreferrer"
              className="text-knbs-600 hover:text-knbs-700 underline"
            >
              Guidelines for Constructing Consumption Aggregates for Welfare
              Analysis (worldbank.org)
            </a>{" "}
            and "On construction of a consumption aggregate for Inequality and
            Poverty Analysis" (Mancini & Vecchi, 2022){" "}
            <a
              href="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099225003092220001/p1694340e80f9a00a09b20042de5a9cd47e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-knbs-600 hover:text-knbs-700 underline"
            >
              On the Construction of a Consumption Aggregate for Inequality and
              Poverty Analysis (worldbank.org)
            </a>{" "}
            In addition, the East Africa Community guidelines on poverty
            statistics were used.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Note:</strong> The guidelines state that the dissemination
              of poverty statistics should be done within six months after the
              completion of the data collection phase. Usually, this is not the
              case. For most intended purposes, the quality is still good
              enough, but if the intended use is time-sensitive, this might
              affect the decision-making process.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
