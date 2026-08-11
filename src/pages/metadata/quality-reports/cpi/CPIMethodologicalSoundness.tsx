// src/components/products/sections/CPIMethodologicalSoundness.tsx
import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { SubSection } from "../common/SubSection";

interface MethodologicalSoundnessProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function MethodologicalSoundness({
  isOpen,
  onToggle,
}: MethodologicalSoundnessProps) {
  return (
    <div
      id="section-methodology"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="methodology"
        number="B.2"
        title="Methodological Soundness"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection
            code="B.2.1"
            title="Compliance with International Standards"
          >
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Kenya CPI methodology adheres to international best
                practices as outlined in:
              </p>

              <div className="grid grid-cols-1 gap-3">
                <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                  <h4 className="font-semibold text-knbs-700 mb-2">
                    Consumer Price Index Manual (2004)
                  </h4>
                  <p className="text-sm text-knbs-600">
                    Joint publication by ILO, IMF, OECD, UNECE, Eurostat, and
                    World Bank providing comprehensive guidance on CPI theory
                    and practice.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    System of National Accounts (SNA 2008)
                  </h4>
                  <p className="text-sm text-gray-700">
                    CPI concepts and definitions align with SNA 2008 framework
                    for household final consumption expenditure.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    COICOP Classification
                  </h4>
                  <p className="text-sm text-gray-700">
                    Basket items classified according to Classification of
                    Individual Consumption According to Purpose (COICOP 2018).
                  </p>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.2.2" title="Basket Composition and Weights">
            <div className="space-y-4">
              <div className="bg-knbs-50 p-4 rounded">
                <h4 className="font-semibold text-knbs-700 mb-2">
                  Base Period: 2019
                </h4>
                <p className="text-sm text-knbs-600 mb-3">
                  Weights derived from the 2015/16 Kenya Integrated Household
                  Budget Survey (KIHBS), rebased to 2019=100.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  CPI Basket Coverage
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      Total Items
                    </p>
                    <p className="text-2xl font-bold text-knbs-600">420</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Goods and services
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      COICOP Divisions
                    </p>
                    <p className="text-2xl font-bold text-knbs-600">12</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Major categories
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                          COICOP Division
                        </th>
                        <th className="px-4 py-2 text-right font-semibold text-gray-700 border-b">
                          Weight (%)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                          Food and Non-Alcoholic Beverages
                        </td>
                        <td className="px-4 py-2 text-right font-medium">
                          36.04
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                          Alcoholic Beverages, Tobacco
                        </td>
                        <td className="px-4 py-2 text-right font-medium">
                          2.72
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">Clothing and Footwear</td>
                        <td className="px-4 py-2 text-right font-medium">
                          3.59
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                          Housing, Water, Electricity, Gas
                        </td>
                        <td className="px-4 py-2 text-right font-medium">
                          19.51
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                          Furnishings, Household Equipment
                        </td>
                        <td className="px-4 py-2 text-right font-medium">
                          4.02
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">Health</td>
                        <td className="px-4 py-2 text-right font-medium">
                          2.68
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">Transport</td>
                        <td className="px-4 py-2 text-right font-medium">
                          14.15
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">Communication</td>
                        <td className="px-4 py-2 text-right font-medium">
                          3.50
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">Recreation and Culture</td>
                        <td className="px-4 py-2 text-right font-medium">
                          2.13
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">Education</td>
                        <td className="px-4 py-2 text-right font-medium">
                          6.92
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">Restaurants and Hotels</td>
                        <td className="px-4 py-2 text-right font-medium">
                          2.63
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                          Miscellaneous Goods and Services
                        </td>
                        <td className="px-4 py-2 text-right font-medium">
                          2.11
                        </td>
                      </tr>
                      <tr className="bg-knbs-50 font-bold">
                        <td className="px-4 py-2">Total</td>
                        <td className="px-4 py-2 text-right">100.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.2.3" title="Index Formula">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Kenya CPI uses the <strong>Laspeyres formula</strong> with
                fixed base period weights:
              </p>

              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-center text-lg font-mono">
                  CPI<sub>t</sub> = Σ(p<sub>t</sub> × q<sub>0</sub>) / Σ(p
                  <sub>0</sub> × q<sub>0</sub>) × 100
                </p>
                <p className="text-xs text-gray-600 text-center mt-2">
                  Where p<sub>t</sub> = current period price, p<sub>0</sub> =
                  base period price, q<sub>0</sub> = base period quantity
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Aggregation Method
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Elementary aggregates calculated using geometric mean</li>
                  <li>Higher-level indices use weighted arithmetic mean</li>
                  <li>Chain-linking applied during basket updates</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
