// src/components/products/sections/CPIAccuracy.tsx
import type { SectionKey } from "../../QualityReport";
import { SectionHeader } from "../../sections/SectionHeader";
import { SubSection } from "../../sections/SubSection";

interface AccuracyProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Accuracy({ isOpen, onToggle }: AccuracyProps) {
  return (
    <div
      id="section-accuracy"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="accuracy"
        number="B.3"
        title="Accuracy and Reliability"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.3.1" title="Price Collection Coverage">
            <div className="space-y-4">
              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <h4 className="font-semibold text-knbs-700 mb-2">
                  Outlet Sample Frame
                </h4>
                <p className="text-sm text-knbs-600 leading-relaxed">
                  Prices are collected from a scientifically selected sample of
                  retail outlets across urban centers in Kenya.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Outlets
                  </p>
                  <p className="text-2xl font-bold text-knbs-600">2,800+</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Retail locations
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Price Quotes
                  </p>
                  <p className="text-2xl font-bold text-knbs-600">~15,000</p>
                  <p className="text-xs text-gray-600 mt-1">Monthly</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Coverage
                  </p>
                  <p className="text-2xl font-bold text-knbs-600">13</p>
                  <p className="text-xs text-gray-600 mt-1">Urban centers</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Covered Urban Centers
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Nairobi</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Mombasa</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Kisumu</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Nakuru</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Eldoret</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Nyeri</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Machakos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Meru</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Kisii</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Kakamega</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Malindi</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Kitale</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-knbs-500 rounded-full mr-2"></span>
                    <span>Garissa</span>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.3.2" title="Quality Assurance Procedures">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Multiple quality control measures ensure accuracy and reliability
                of price data:
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-knbs-400">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Field Validation
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Supervisors conduct random spot checks (10% of outlets)</li>
                    <li>Mobile data collection with GPS verification</li>
                    <li>Automated range and logic checks in real-time</li>
                    <li>Outlet replacement protocols for closures</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded border-l-4 border-knbs-400">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Price Editing
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>
                      Automated detection of outliers (±3 standard deviations)
                    </li>
                    <li>Month-to-month price change validation</li>
                    <li>Cross-outlet price comparison within same area</li>
                    <li>Manual review of flagged items by senior staff</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded border-l-4 border-knbs-400">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Missing Data Treatment
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Temporary absence: carry forward last price</li>
                    <li>Permanent disappearance: comparable replacement item</li>
                    <li>Seasonal items: class mean imputation</li>
                    <li>
                      Missing outlet: use area average if &lt;20% response rate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.3.3" title="Revision Policy">
            <div className="space-y-3">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <h4 className="font-semibold text-amber-700 mb-2">
                  No Routine Revisions
                </h4>
                <p className="text-sm text-amber-600 leading-relaxed">
                  Once published, monthly CPI figures are <strong>not revised</strong> except
                  in cases of significant errors discovered during quality assurance.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Exceptional Circumstances
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Revisions may occur only if:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Critical data processing error detected</li>
                  <li>Incorrect weights applied</li>
                  <li>Major classification error identified</li>
                </ul>
                <p className="text-xs text-gray-600 mt-3">
                  Any revision is publicly announced with detailed explanation.
                </p>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.3.4" title="Data Processing Workflow">
            <div className="space-y-4">
              <div className="bg-white border-2 border-knbs-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-knbs-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">
                      Field Collection
                    </p>
                    <p className="text-xs text-gray-500">Days 1-15</p>
                  </div>
                  <div className="text-knbs-400 text-2xl">→</div>
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-knbs-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">✓</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">
                      Data Validation
                    </p>
                    <p className="text-xs text-gray-500">Days 16-20</p>
                  </div>
                  <div className="text-knbs-400 text-2xl">→</div>
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-knbs-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📊</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">
                      Index Compilation
                    </p>
                    <p className="text-xs text-gray-500">Days 21-25</p>
                  </div>
                  <div className="text-knbs-400 text-2xl">→</div>
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-knbs-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl text-white">📢</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">
                      Publication
                    </p>
                    <p className="text-xs text-gray-500">End of month</p>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}