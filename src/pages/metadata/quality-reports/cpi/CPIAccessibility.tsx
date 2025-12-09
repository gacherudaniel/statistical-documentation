// src/components/products/sections/CPIAccessibility.tsx
import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { SubSection } from "../common/SubSection";
import {
  ExternalLink,
  FileText,
  Building2,
  Database,
  Download,
  Globe,
  BookOpen,
  Calendar,
  Clock,
  BarChart3,
  Search,
} from "lucide-react";

interface AccessibilityProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Accessibility({ isOpen, onToggle }: AccessibilityProps) {
  return (
    <div
      id="section-accessibility"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="accessibility"
        number="B.5"
        title="Accessibility and Clarity"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.5" title="Overview">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="text-knbs-600" size={20} />
                    <h5 className="font-semibold text-knbs-700">
                      Accessibility
                    </h5>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    CPI data and reports are made available through{" "}
                    <strong>multiple channels</strong> to ensure wide access for
                    policy makers, researchers, and the public.
                  </p>
                </div>

                <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="text-knbs-600" size={20} />
                    <h5 className="font-semibold text-knbs-700">Clarity</h5>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Comprehensive <strong>metadata and documentation</strong>{" "}
                    accompany CPI releases to support proper interpretation.
                  </p>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.5.1" title="Dissemination Channels">
            <div className="space-y-6">
              {/* Online Access */}
              <div>
                <h5 className="font-medium text-knbs-700 mb-3 flex items-center gap-2">
                  <div className="bg-knbs-100 p-1.5 rounded">
                    <Globe className="text-knbs-600" size={16} />
                  </div>
                  Online Resources
                </h5>

                <div className="space-y-3">
                  <div className="bg-white border border-knbs-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-knbs-100 p-2 rounded">
                        <FileText className="text-knbs-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 mb-2">
                          Monthly CPI Bulletins
                        </p>
                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                          Published monthly within 15 days after reference
                          period. Available in PDF format with detailed
                          methodology notes and index tables.
                        </p>
                        <a
                          href="https://www.knbs.or.ke/consumer-price-indices"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-knbs-600 hover:text-knbs-700 text-sm flex items-center gap-2 hover:underline font-medium"
                        >
                          <ExternalLink size={14} />
                          Consumer Price Indices - KNBS
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-knbs-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-knbs-100 p-2 rounded">
                        <Download className="text-knbs-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 mb-2">
                          Downloadable Data Files
                        </p>
                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                          Time series data in Excel and CSV formats available
                          for download. Includes historical indices from 2009
                          base year to current.
                        </p>
                        <a
                          href="https://www.knbs.or.ke/download-statistics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-knbs-600 hover:text-knbs-700 text-sm flex items-center gap-2 hover:underline font-medium"
                        >
                          <ExternalLink size={14} />
                          Download Statistics - KNBS
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Access */}
              <div>
                <h5 className="font-medium text-knbs-700 mb-3 flex items-center gap-2">
                  <div className="bg-knbs-100 p-1.5 rounded">
                    <BookOpen className="text-knbs-600" size={16} />
                  </div>
                  Physical Access Points
                </h5>

                <div className="bg-gradient-to-br from-knbs-50 to-white border border-knbs-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Hard copies of CPI reports and historical bulletins are
                    available at:
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 bg-white p-3 rounded border border-knbs-100">
                      <Building2
                        className="text-knbs-500 flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          KNBS Library
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Nairobi Headquarters
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Herufi House, Maktaba Road
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white p-3 rounded border border-knbs-100">
                      <Building2
                        className="text-knbs-500 flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          Regional Offices
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          47 County Statistical Offices
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Contact for local access
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.5.2" title="Release Schedule">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                CPI data follows a <strong>predictable release calendar</strong>{" "}
                to ensure users can plan for data availability:
              </p>

              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <h5 className="font-semibold text-knbs-700 mb-3">
                  Monthly Release Pattern
                </h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-knbs-600" size={16} />
                      <p className="text-sm font-medium text-gray-800">
                        Publication Date
                      </p>
                    </div>
                    <p className="text-sm text-gray-700">
                      Within <strong>15 days</strong> after reference month
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="text-knbs-600" size={16} />
                      <p className="text-sm font-medium text-gray-800">
                        Release Time
                      </p>
                    </div>
                    <p className="text-sm text-gray-700">
                      <strong>9:00 AM EAT</strong> on publication day
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <h5 className="font-semibold text-amber-900 mb-2">
                  Advance Release Calendar
                </h5>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Annual release calendar is published at the beginning of each
                  year on the KNBS website, providing exact dates for all
                  scheduled CPI releases.
                </p>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.5.3" title="Documentation and Metadata">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Each CPI release is accompanied by comprehensive documentation:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="text-gray-600" size={16} />
                    <h5 className="font-medium text-gray-800 text-sm">
                      Monthly Bulletin
                    </h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Index numbers by COICOP division</li>
                    <li>• Month-on-month changes</li>
                    <li>• Year-on-year changes</li>
                    <li>• Contribution to inflation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="text-gray-600" size={16} />
                    <h5 className="font-medium text-gray-800 text-sm">
                      Technical Notes
                    </h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Methodology summary</li>
                    <li>• Weight structure</li>
                    <li>• Coverage and scope</li>
                    <li>• Index calculation formulas</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="text-gray-600" size={16} />
                    <h5 className="font-medium text-gray-800 text-sm">
                      Annual Methodology Report
                    </h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Detailed methodology</li>
                    <li>• Quality procedures</li>
                    <li>• Classifications used</li>
                    <li>• Revision policy</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="text-gray-600" size={16} />
                    <h5 className="font-medium text-gray-800 text-sm">
                      Quality Report
                    </h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Quality dimensions assessment</li>
                    <li>• Data sources</li>
                    <li>• Limitations</li>
                    <li>• International comparisons</li>
                  </ul>
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
