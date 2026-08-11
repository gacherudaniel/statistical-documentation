// src/components/products/sections/CPICoherence.tsx
import { AlertTriangle } from "lucide-react";
import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { SubSection } from "../common/SubSection";

interface CoherenceProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Coherence({ isOpen, onToggle }: CoherenceProps) {
  return (
    <div
      id="section-coherence"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="coherence"
        number="B.6"
        title="Coherence and Comparability"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.6.1" title="Geographic Coverage">
            <div className="space-y-4">
              <p className="leading-relaxed text-gray-700">
                The Consumer Price Index covers <strong>urban areas</strong>{" "}
                across Kenya with the following reporting structure:
              </p>

              <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
                <h5 className="font-semibold text-knbs-700 mb-3">
                  CPI Reporting Levels
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-knbs-500 mt-1">•</span>
                    <span>
                      <strong>National CPI:</strong> Overall inflation rate for
                      Kenya
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-knbs-500 mt-1">•</span>
                    <span>
                      <strong>Urban Centers:</strong> Individual indices for 13
                      major urban areas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-knbs-500 mt-1">•</span>
                    <span>
                      <strong>COICOP Divisions:</strong> 12 commodity groups
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-knbs-500 mt-1">•</span>
                    <span>
                      <strong>Special Indices:</strong> Core inflation, food
                      inflation, non-food inflation
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 mb-3">
                  Covered Urban Centers
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  {[
                    "Nairobi",
                    "Mombasa",
                    "Kisumu",
                    "Nakuru",
                    "Eldoret",
                    "Nyeri",
                    "Machakos",
                    "Meru",
                    "Kisii",
                    "Kakamega",
                    "Malindi",
                    "Kitale",
                    "Garissa",
                  ].map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-200"
                    >
                      <span className="w-2 h-2 bg-knbs-500 rounded-full"></span>
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.6.2" title="Classification System">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The CPI follows the{" "}
                <strong>
                  Classification of Individual Consumption According to Purpose
                  (COICOP)
                </strong>{" "}
                international standard.
              </p>

              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <h5 className="font-semibold text-knbs-700 mb-3">
                  COICOP Divisions (12 Main Groups)
                </h5>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    01 - Food and Non-Alcoholic Beverages
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    02 - Alcoholic Beverages, Tobacco
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    03 - Clothing and Footwear
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    04 - Housing, Water, Electricity, Gas
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    05 - Furnishings, Household Equipment
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    06 - Health
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    07 - Transport
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    08 - Communication
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    09 - Recreation and Culture
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    10 - Education
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    11 - Restaurants and Hotels
                  </div>
                  <div className="bg-white p-2 rounded border border-knbs-200">
                    12 - Miscellaneous Goods and Services
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.6.3" title="Historical Comparability">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kenya's CPI has undergone several base year changes to maintain
                relevance and international comparability:
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-knbs-400">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-800">
                      Current Base: 2009
                    </h5>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Based on 2005/06 Kenya Integrated Household Budget Survey
                    (KIHBS). Introduced in 2012 and currently in use.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-800">
                      Previous Base: 1997
                    </h5>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      Discontinued
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Used from 1998 to 2012. Historical series available with
                    linking factors.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-800">
                      Previous Base: 1990
                    </h5>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      Discontinued
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Historical base. Data available in archival records.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="text-amber-700" size={18} />
                  Comparability Note
                </h5>
                <p className="text-sm text-amber-800 leading-relaxed mb-2"> 
                  When comparing CPI data across different base years:
                </p>
                <ul className="text-sm text-amber-800 space-y-1 ml-4">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>
                      Use the <strong>linking factors</strong> provided by KNBS
                      to ensure consistency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>
                      Be aware that <strong>commodity weights</strong> change
                      with each rebasing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>
                      Note that <strong>methodological improvements</strong> may
                      affect comparability
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.6.4" title="International Comparability">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kenya's CPI methodology aligns with international standards,
                facilitating cross-country comparisons:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-knbs-50 p-4 rounded border border-knbs-200">
                  <h5 className="font-medium text-knbs-700 mb-2">
                    ✓ COICOP Classification
                  </h5>
                  <p className="text-sm text-gray-700">
                    Allows comparison with other countries using the same
                    international standard
                  </p>
                </div>

                <div className="bg-knbs-50 p-4 rounded border border-knbs-200">
                  <h5 className="font-medium text-knbs-700 mb-2">
                    ✓ ILO/IMF Guidelines
                  </h5>
                  <p className="text-sm text-gray-700">
                    Methodology follows CPI Manual 2004 international best
                    practices
                  </p>
                </div>

                <div className="bg-knbs-50 p-4 rounded border border-knbs-200">
                  <h5 className="font-medium text-knbs-700 mb-2">
                    ✓ Regional Harmonization
                  </h5>
                  <p className="text-sm text-gray-700">
                    Participates in EAC statistical harmonization initiatives
                  </p>
                </div>

                <div className="bg-knbs-50 p-4 rounded border border-knbs-200">
                  <h5 className="font-medium text-knbs-700 mb-2">
                    ✓ IMF SDDS Compliance
                  </h5>
                  <p className="text-sm text-gray-700">
                    Meets Special Data Dissemination Standard requirements
                  </p>
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
