// src/components/products/sections/CPIRelevance.tsx
import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { SubSection } from "../common/SubSection";

interface RelevanceProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Relevance({ isOpen, onToggle }: RelevanceProps) {
  return (
    <div
      id="section-relevance"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="relevance"
        number="B.1"
        title="Relevance"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.1.1" title="Objective and Use of Statistics">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Primary Objective
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  The Consumer Price Index (CPI) measures the average change
                  over time in prices paid by urban consumers for a
                  representative basket of goods and services. It serves as the
                  primary indicator of inflation in Kenya.
                </p>
              </div>

              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <h4 className="font-semibold text-knbs-700 mb-2">
                  Key Applications
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-knbs-600">
                  <li>
                    <strong>Monetary Policy:</strong> Central Bank of Kenya uses
                    CPI for inflation targeting and interest rate decisions
                  </li>
                  <li>
                    <strong>Wage Adjustments:</strong> Labor unions and
                    employers use CPI for salary negotiations
                  </li>
                  <li>
                    <strong>Contract Escalation:</strong> Indexation of
                    long-term contracts and pensions
                  </li>
                  <li>
                    <strong>Economic Analysis:</strong> Deflating nominal values
                    to obtain real measures
                  </li>
                  <li>
                    <strong>Fiscal Policy:</strong> Government budget planning
                    and tax bracket adjustments
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  User Groups
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <p className="font-semibold text-sm text-knbs-600 mb-1">
                      Government
                    </p>
                    <p className="text-xs text-gray-600">
                      National Treasury, CBK, Ministries
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <p className="font-semibold text-sm text-knbs-600 mb-1">
                      Private Sector
                    </p>
                    <p className="text-xs text-gray-600">
                      Businesses, Banks, Investors
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <p className="font-semibold text-sm text-knbs-600 mb-1">
                      Research
                    </p>
                    <p className="text-xs text-gray-600">
                      Universities, Think tanks, Analysts
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <p className="font-semibold text-sm text-knbs-600 mb-1">
                      International
                    </p>
                    <p className="text-xs text-gray-600">
                      IMF, World Bank, Embassies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.1.2" title="User Consultation">
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                KNBS conducts regular consultations with key CPI users to ensure
                the index remains relevant and meets evolving needs.
              </p>

              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Consultation Mechanisms
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Annual CPI Technical Advisory Committee meetings</li>
                  <li>Quarterly user feedback sessions</li>
                  <li>Online feedback portal on KNBS website</li>
                  <li>Periodic basket review workshops with stakeholders</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
